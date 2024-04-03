import prisma from "@/app/lib/prisma";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import CreateFields from "@/components/Forum/CreateFields";

export default async function CreatePost({params}: {params: {subtopicId: string}}) {
    const {getUser} = getKindeServerSession();
    const userObject = await getUser();
    const kindeId = userObject?.id;
    async function formAction(formData: FormData) {
        "use server";

        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        const subtopicId = params.subtopicId;

        try {
            const user = await prisma.user.findUnique({
                where: {
                    kindeId: kindeId!,
                },
            });
            const post = await prisma.post.create({
                data: {
                    title,
                    content,
                    authorId: user?.id!,
                    subtopicId,
                },
            });
        } catch (error) {
            console.error('Failed to create post:', error);
        } finally {
            redirect(`/forum/subtopic/${subtopicId}`);
        }
    }
    return (
        <form action={formAction}>
            <CreateFields defaultText="Post about Snowflake"/> 
        </form>
    );
}
