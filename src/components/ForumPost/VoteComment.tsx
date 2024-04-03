import Link from "next/link";
import prisma from "@/app/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Comment, Post, PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import IconCaretUp from "@/components/ForumPost/IconCaretUp";
import IconCaretDown from "@/components/ForumPost/IconCaretDown";
import IconCaretDownHollow from "@/components/ForumPost/IconCaretDownHollow";
import IconCaretUpHollow from "@/components/ForumPost/IconCaretUpHollow";

async function getComment(commentId: string) {
    const comment = await prisma.comment.findUnique({
        where: { id: commentId },
        include: {
            post: true,
        },
    }
    );
    if (!comment) {
        return null;
    }
    return comment;
}
async function checkVote(commentId: string) {
    "use server";
    const comment = await prisma.comment.findUnique({
        where: { id: commentId },
    });
    const { getUser } = getKindeServerSession();
    const kindeObject = await getUser();
    const kindeId = kindeObject?.id;
    const user = await prisma.user.findUnique({
        where: {
            kindeId: kindeId,
        },
    });
    if (!comment || !user) {
        console.error('Comment or User not found');
        return;
    }

    if (comment.upvotes.includes(user.id)) {
        return 'upvote';
    } else if (comment.downvotes.includes(user.id)) {
        return 'downvote';
    } else {
        return 'none';
    }
}

function getVoteAmount(comment: Comment) {
    return comment.upvotes.length - comment.downvotes.length;
}

export default async function VoteComment({ commentId, postId }: { commentId: string; postId: string }) {
    async function voteComment(formData: FormData) {
        "use server";
        const direction = formData.get('direction') as 'upvote' | 'downvote';
        const { getUser } = getKindeServerSession();
        const kindeObject = await getUser();
        const kindeId = kindeObject?.id;
    
        const commentId = formData.get('commentId') as string;
    
        const user = await prisma.user.findUnique({
            where: {
                kindeId: kindeId,
            },
        });
    
        if (!user || !commentId) {
            console.error('User or comment missing');
            return;
        }
    
        const comment = await prisma.comment.findUnique({
            where: {
                id: commentId,
             },
             include: {
                    post: true,
                },
        });
    
        if (!comment) {
            console.error('Comment not found');
            return;
        }
    
        const voteField = direction === 'upvote' ? 'upvotes' : 'downvotes';
        const oppositeVoteField = direction === 'upvote' ? 'downvotes' : 'upvotes';
    
        if (comment[oppositeVoteField].includes(user.id)) {
            await prisma.comment.update({
                where: { id: commentId },
                data: {
                    [oppositeVoteField]: {
                        set: comment[oppositeVoteField].filter((userId) => userId !== user.id),
                    },
                },
            });
        }
    
        if (comment[voteField].includes(user.id)) {
            await prisma.comment.update({
                where: { id: commentId },
                data: {
                    [voteField]: {
                        set: comment[voteField].filter((userId) => userId !== user.id),
                    },
                },
            });
        } else {
            await prisma.comment.update({
                where: { id: commentId },
                data: {
                    [voteField]: {
                        push: user.id,
                    },
                },
            });
        }
    
        // Optionally, revalidate the path if using ISR or any form of data caching that needs to be updated
        revalidatePath(`/forum/subtopic/${comment.post.subtopicId}/post/${postId}`);
    }
    

    const comment = await getComment(commentId);
    const userVote = await checkVote(commentId);

    return (
        <div className='flex flex-col items-center justify-center gap-4 sm:gap-0 mt-16 ml-10 pb-4 sm:pb-0 mb-0'>
        <form id="upvoteForm" action={voteComment}>
            <button type="submit" className="flex items-center justify-center">
                <input type="hidden" name="commentId" value={commentId} />
                <input type="hidden" name="postId" value={postId} />
                <input type="hidden" name="direction" value="upvote" />
                {userVote === 'upvote' ? <IconCaretUpHollow /> : <IconCaretUp />}
            </button>
        </form>

        <p className='text-center py-2 font-medium text-sm text-zinc-900'>
            {comment ? getVoteAmount(comment) : 0}
        </p>

        <form id="downvoteForm" action={voteComment}>
            <button type="submit" className="flex items-center justify-center">
                <input type="hidden" name="commentId" value={commentId} />
                <input type="hidden" name="postId" value={postId} />
                <input type="hidden" name="direction" value="downvote" />
                {userVote === 'downvote' ? <IconCaretDownHollow /> : <IconCaretDown />}
            </button>
        </form>
    </div>
    );

}

