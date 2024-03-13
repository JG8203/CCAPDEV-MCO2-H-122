import Link from "next/link";
import prisma from "@/app/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";

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
                where: { id: postId },
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
                    where: { id: postId },
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
                    where: { id: postId },
                    data: {
                        [voteField]: {
                            set: post[voteField].filter((userId) => userId !== user.id),
                        },
                    },
                });
            } else {
                await prisma.post.update({
                    where: { id: postId },
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
    return (
        <div className='flex flex-col gap-4 sm:gap-0 pr-2 sm:w-12 mt-16 ml-10 pb-4 sm:pb-0 mb-0'>
            <form id="upvoteForm" action={votePost} method="post">
                <button id="search-button" type="submit">
                    <input type="hidden" name="postId" value={postId} />
                    <input type="hidden" name="subtopicId" value={subtopicId} />
                    <input type="hidden" name="direction" value="upvote" />
                    ⬆️
                </button>
            </form>
            <p className='text-center py-2 font-medium text-sm text-zinc-900'>
                {post ? getVoteAmount(post) : 0}
            </p>
            <form id="downvoteForm" action={votePost} method="post">
                <button id="search-button" type="submit">
                    <input type="hidden" name="postId" value={postId} />
                    <input type="hidden" name="subtopicId" value={subtopicId} />
                    <input type="hidden" name="direction" value="downvote" />
                    ⬇️
                </button>
            </form>
        </div>
    );

}
