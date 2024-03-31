import Link from "next/link";
import prisma from "@/app/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import IconCaretUp from "@/components/ForumPost/IconCaretUp";
import IconCaretDown from "@/components/ForumPost/IconCaretDown";
import IconCaretDownHollow from "@/components/ForumPost/IconCaretDownHollow";
import IconCaretUpHollow from "@/components/ForumPost/IconCaretUpHollow";
import { Comment } from '@prisma/client';
async function getComment(commentId: string) {
    const comment = await prisma.comment.findUnique({
        where: { id: commentId }
    });
    if (!comment) {
        return null;
    }
    return comment;
}

async function checkVote(commentId: string, userId: string) {
    "use server";
    const comment = await prisma.comment.findUnique({
        where: { id: commentId },
    });

    if (!comment) {
        console.error('Comment not found');
        return;
    }

    if (comment.upvotes.includes(userId)) {
        return 'upvote';
    } else if (comment.downvotes.includes(userId)) {
        return 'downvote';
    } else {
        return 'none';
    }
}

async function getVoteAmount(commentId: string) {
    "use server";
    const comment = await prisma.comment.findUnique({
        where: { id: commentId },
    });
    if (!comment) {
        console.error('Comment not found');
        return;
    }

    return comment.upvotes.length - comment.downvotes.length;
}

export default async function VoteComment({postId, subtopicId, commentId}: {postId: string, subtopicId: string, commentId : string}){
    async function voteComment(formData: FormData) {
        "use server";
        const direction = formData.get('direction') as 'upvote' | 'downvote';
        const { getUser } = getKindeServerSession();
        const kindeObject = await getUser();
        const kindeId = kindeObject?.id;

        const commentId = formData.get('commentId');

        const user = await prisma.user.findUnique({
            where: {
                kindeId: kindeId,
            },
        });

        if (!user || !commentId) {
            console.error('User or CommentId missing');
            return;
        }

        try {
            const comment = await prisma.comment.findUnique({
                where: { id: String(commentId) },
            });

            if (!comment) {
                console.error('Comment not found');
                return;
            }

            const voteField = direction === 'upvote' ? 'upvotes' : 'downvotes';
            const oppositeVoteField = direction === 'upvote' ? 'downvotes' : 'upvotes';

            // Remove user's ID from the opposite vote field if present
            if (comment[oppositeVoteField].includes(user.id)) {
                await prisma.comment.update({
                    where: { id: String(commentId) },
                    data: {
                        [oppositeVoteField]: {
                            set: comment[oppositeVoteField].filter((userId) => userId !== user.id),
                        },
                    },
                });
            }

            // Proceed to add or remove user's vote as requested
            if (comment[voteField].includes(user.id)) {
                await prisma.comment.update({
                    where: { id: String(commentId) },
                    data: {
                        [voteField]: {
                            set: comment[voteField].filter((userId) => userId !== user.id),
                        },
                    },
                });
            } else {
                await prisma.comment.update({
                    where: { id: commentId.toString() },
                    data: {
                        [voteField]: {
                            push: user.id,
                        },
                    },
                });
            }
        } catch (error) {
            console.error(`Failed to ${direction} comment:`, error);
        }
        revalidatePath(`/forum/subtopic/${formData.get('subtopicId')}/post/${postId}`);
    }

    const comment = await getComment(commentId);
    const userVote = await checkVote(commentId, user.id);




return (
    <div className='flex-col items-center justify-center gap-4 sm:gap-0 mt-16 ml-10 pb-4 sm:pb-0 mb-0'>
        <form id="upvoteForm" action={voteComment} method="post">
            <button id="search-button" type="submit" className="flex items-center justify-center">
                <input type="hidden" name="postId" value={postId} />
                <input type="hidden" name="subtopicId" value={subtopicId} />
                <input type="hidden" name="direction" value="upvote" />
                {userVote === 'upvote' ? <IconCaretUpHollow /> : <IconCaretUp />}
            </button>
        </form>

        <p className='text-center py-2 font-medium text-sm text-zinc-900'>
            {comment ? getVoteAmount(comment) : 0}
        </p>
        <form id="downvoteForm" action={voteComment} method="post">
            <button id="search-button" type="submit" className="flex items-center justify-center">
                <input type="hidden" name="postId" value={postId} />
                <input type="hidden" name="subtopicId" value={subtopicId} />
                <input type="hidden" name="direction" value="downvote" />
                {userVote === 'downvote' ? <IconCaretDownHollow /> : <IconCaretDown />}
            </button>
        </form>
    </div>
);

}

