import prisma from "@/app/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";

export default async function upvotePost({ params }: { params: { postId: string, subtopicId: string } }) {
    const { getUser } = getKindeServerSession();
    const userObject = await getUser();
    const kindeId = userObject?.id;
    const post = await prisma.post.findUnique({
        where: {
            id: params.postId,
        },
        include: {
            user: true,
        },
    });

    const vote = await prisma.vote.create({

    })

    async function formAction() {
        "use server";
        const postId = params.postId;
        try {
            await prisma.post.update({
                where: {
                    id: postId,
                },
                data: {
                    upvotes: {
                        push: kindeId,
                    },
                },
            });
        } catch (error) {
            console.error('Failed to upvote post:', error);
        } finally {
            const { subtopicId } = params;
            const { postId} = params;
            redirect(`/forum/subtopic/${subtopicId}/post/${postId}`);
        }
    }

    return (
        <form action={formAction}>
            <h1 className="text-4xl font-bold text-burnt-sienna p-5">Upvote Post</h1>
            <p>Are you sure you want to upvote this post?</p>
            <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Upvote Post
            </button>
        </form>
    );
}
