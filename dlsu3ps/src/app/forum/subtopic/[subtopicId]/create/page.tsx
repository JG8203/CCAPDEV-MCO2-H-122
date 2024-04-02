import prisma from "@/app/lib/prisma";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

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
            await prisma.post.create({
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
            <div className="text-4xl font-bold text-burnt-sienna p-5">
                Create Thread
            </div>
            <div className="flex flex-col p-5">
                <label htmlFor="post-title" className="text-2xl py-3 font-semibold">Title</label>
                <input
                    className="bg-white appearance-none border-2 border-dim-gray rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-burnt-sienna"
                    name="title"
                    type="title"
                    placeholder="Where is Casper?"
                    required
                    minLength={5}
                />
            </div>
            <div className="flex flex-col p-5">
                <label htmlFor="post-content" className="text-2xl py-3 font-semibold">Content</label>
                <textarea
                    className="bg-white appearance-none border-2 border-dim-gray rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-burnt-sienna"
                    name="content"
                    rows={20}
                    required
                    minLength={20}
                ></textarea>
            </div>
            <div className="w-full flex justify-end">
                <button
                    className="bg-olive hover:bg-olive-light text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline m-5"
                    type="submit"
                >
                    Create Post
                </button>
            </div>
        </form>
    );
}
