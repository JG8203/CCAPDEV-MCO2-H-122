import prisma from "@/app/lib/prisma";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function DeleteComment({ params }: { params: { commentId: string } }) {
    console.log(params);
    const { getUser } = getKindeServerSession();
    const userObject = await getUser();
    const kindeId = userObject?.id;
    const comment = await prisma.comment.findUnique({
        where: {
            id: params.commentId,
        },
        include: {
            post: true, // Include the post relation
        },
    });

    // Fetch the user separately using the authorId from the comment
    const user = comment && await prisma.user.findUnique({
        where: {
            id: comment.authorId,
        },
    });

    if (!comment || !user || user.kindeId !== kindeId) {
        return { notFound: true }; // Simplified, adjust based on your error handling
    }

    async function formAction() {
        "use server";
        const commentId = params.commentId;
        try {
            await prisma.comment.update({
                where: {
                    id: commentId,
                },
                data: {
                    isDeleted: true,
                },
            });
        } catch (error) {
            console.error('Failed to delete comment:', error);
        } finally {
            if (comment) {
                redirect(`/forum/subtopic/${comment.post.subtopicId}/post/${comment.postId}`);
            }
        }
    }

    return (
        <div>
            <h1 className="text-4xl font-bold text-burnt-sienna p-5">Delete Comment</h1>
            <p>Are you sure you want to delete this comment?</p>
            <form action={formAction}>
                <input type="hidden" name="commentId" value={comment.id} />
                <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Delete Comment
                </button>
            </form>
        </div>
    );
}
