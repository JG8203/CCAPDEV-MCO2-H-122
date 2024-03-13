import prisma from "@/app/lib/prisma";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function DeletePost({ params }: { params: { postId: string, subtopicId: string } }) {
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

    if (!post || post.user.kindeId !== kindeId) {
        return { notFound: true }; 
    }

    async function formAction(formData: FormData) {
        "use server";
        const postId = params.postId;
        try {
            await prisma.post.update({
                where: {
                    id: postId,
                },
                data: {
                    isDeleted: true,
                },
            });
        } catch (error) {
            console.error('Failed to delete post:', error);
        } finally {
            const { subtopicId } = params;
            redirect(`/forum/subtopic/${subtopicId}`);
        }
    }

    return (
        <div>
            <h1 className="text-4xl font-bold text-burnt-sienna p-5">Delete Post</h1>
            <p>Are you sure you want to delete this post?</p>
            <form action={formAction}>
                <input type="hidden" name="postId" value={post.id} />
                <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Delete Post
                </button>
            </form>

        </div>
    );
}
