import prisma from "@/app/lib/prisma";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function EditComment({ params }: { params: { commentId: string } }) {
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

    async function formAction(formData: FormData) {
        "use server";

        const content = formData.get('content');
        const commentId = params.commentId;

        try {
            await prisma.comment.update({
                where: {
                    id: commentId,
                },
                data: {
                    content: content as string,
                },
            });
        } catch (error) {
            console.error('Failed to update comment:', error);
        } finally {
            if (comment) {
                redirect(`/forum/subtopic/${comment.post.subtopicId}/post/${comment.postId}`);
            }
        }
    }

    return (
        <form action={formAction}>
            <div className="text-4xl font-bold text-burnt-sienna p-5">
                Edit Comment
            </div>
            <div className="flex flex-col p-5">
                <label htmlFor="comment-content" className="text-2xl py-3 font-semibold">Content</label>
                <textarea
                    className="bg-white appearance-none border-2 border-dim-gray rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-burnt-sienna"
                    name="content"
                    rows={20}
                    required
                    minLength={20}
                    defaultValue={comment?.content}
                ></textarea>
            </div>
            <div className="w-full flex justify-end">
                <button
                    className="bg-olive hover:bg-olive-light text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline m-5"
                    type="submit"
                >
                    Update Comment
                </button>
            </div>
        </form>
    );
}
