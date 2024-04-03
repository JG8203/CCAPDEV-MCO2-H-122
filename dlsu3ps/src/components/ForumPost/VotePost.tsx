import Link from "next/link";
import prisma from "@/app/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import IconCaretUp from "@/components/ForumPost/IconCaretUp";
import IconCaretDown from "@/components/ForumPost/IconCaretDown";
import IconCaretDownHollow from "@/components/ForumPost/IconCaretDownHollow";
import IconCaretUpHollow from "@/components/ForumPost/IconCaretUpHollow";

async function getPost(postId: string) {
    const post = await prisma.post.findUnique({
        where: { id: postId }
    }
    );
    if (!post) {
        return null;
    }
    return post;
}
async function checkVote(postId: string) {
    "use server";
    const post = await prisma.post.findUnique({
        where: { id: postId },
    });
    const { getUser } = getKindeServerSession();
    const kindeObject = await getUser();
    const kindeId = kindeObject?.id;
    const user = await prisma.user.findUnique({
        where: {
            kindeId: kindeId,
        },
    });
    if (!post || !user) {
        console.error('Post or User not found');
        return;
    }

    if (post.upvotes.includes(user.id)) {
        return 'upvote';
    } else if (post.downvotes.includes(user.id)) {
        return 'downvote';
    } else {
        return 'none';
    }
}

function getVoteAmount(post: Post) {
    return post.upvotes.length - post.downvotes.length;
}

export default async function Vote({ postId, subtopicId }: { postId: string; subtopicId: string }) {
    async function votePost(formData: FormData) {
        "use server";
        const direction = formData.get('direction') as 'upvote' | 'downvote';
        const { getUser } = getKindeServerSession();
        const kindeObject = await getUser();
        const kindeId = kindeObject?.id;

        const postId = formData.get('postId');

        const user = await prisma.user.findUnique({
            where: {
                kindeId: kindeId,
            },
        });

        if (!user || !postId) {
            console.error('User or PostId missing');
            return;
        }

        try {
            const post = await prisma.post.findUnique({
                where: { id: String(postId) },
            });

            if (!post) {
                console.error('Post not found');
                return;
            }

            const voteField = direction === 'upvote' ? 'upvotes' : 'downvotes';
            const oppositeVoteField = direction === 'upvote' ? 'downvotes' : 'upvotes';

            // Remove user's ID from the opposite vote field if present
            if (post[oppositeVoteField].includes(user.id)) {
                await prisma.post.update({
                    where: { id: String(postId) }, // Convert postId to string
                    data: {
                        [oppositeVoteField]: {
                            set: post[oppositeVoteField].filter((userId) => userId !== user.id),
                        },
                    },
                });
            }

            // Proceed to add or remove user's vote as requested
            if (post[voteField].includes(user.id)) {
                await prisma.post.update({
                    where: { id: String(postId) },
                    data: {
                        [voteField]: {
                            set: post[voteField].filter((userId) => userId !== user.id),
                        },
                    },
                });
            } else {
                await prisma.post.update({
                    where: { id: postId.toString() },
                    data: {
                        [voteField]: {
                            push: user.id,
                        },
                    },
                });
            }
        } catch (error) {
            console.error(`Failed to ${direction} post:`, error);
        }
        revalidatePath(`/forum/subtopic/${formData.get('subtopicId')}/post/${postId}`);
    }


    const post = await getPost(postId);
    const userVote = await checkVote(postId);

    return (
        <div className='flex-col items-center justify-center gap-4 sm:gap-0 mt-16 ml-10 pb-4 sm:pb-0 mb-0'>
            <form id="upvoteForm" action={votePost} method="post">
                <button id="search-button" type="submit" className="flex items-center justify-center">
                    <input type="hidden" name="postId" value={postId} />
                    <input type="hidden" name="subtopicId" value={subtopicId} />
                    <input type="hidden" name="direction" value="upvote" />
                    {userVote === 'upvote' ? <IconCaretUpHollow /> : <IconCaretUp />}
                </button>
            </form>

            <p className='text-center py-2 font-medium text-sm text-zinc-900'>
                {post ? getVoteAmount(post) : 0}
            </p>
            <form id="downvoteForm" action={votePost} method="post">
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

