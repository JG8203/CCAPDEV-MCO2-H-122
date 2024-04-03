import prisma from "@/app/lib/prisma";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import EditFields from "@/components/Forum/EditFields";

export default async function EditPost({ params }: { params: { postId: string, subtopicId: string } }) {
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

        const content = formData.get('content');
        const title = formData.get('title'); 
        const postId = params.postId;

        try {
            
            await prisma.post.update({
                where: {
                    id: postId,
                },
                data: {
                    content: content as string,
                    title: title as string, 
                    
                },
            });
        } catch (error) {
            console.error('Failed to update post:', error);
        } finally {
            const { subtopicId, postId } = params;
            redirect(`/forum/subtopic/${subtopicId}/post/${postId}`);
        }
    }

    return (
        <form action={formAction}>
            <EditFields defaultTitle={post.title} defaultContent={post.content} />
        </form>
    );
}
