// ForumRow.tsx
import { Post } from '@prisma/client';
import Link from 'next/link';
import prisma from '@/app/lib/prisma';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from "next/navigation";
import { remark } from 'remark';
import html from 'remark-html';

async function getPostCommentsCount(postId: string) {
    const postWithCommentsCount = await prisma.post.findUnique({
        where: {
            id: postId,
        },
        include: {
            _count: {
                select: { comments: true },
            },
        },
    });

    return postWithCommentsCount?._count.comments;
}

async function deletePost(postId: string) {
    "use server"
    await prisma.post.update({
        where: {
            id: postId,
        },
        data: {
            isDeleted: true,
        },
    });
}


export default async function ForumRow({ post, subtopicId }: { post: Post; subtopicId: string }) {
    const commentsCount = getPostCommentsCount(post.id);
    const {
        getPermissions,
    } = getKindeServerSession();
    async function handleDeletePost(formData : FormData) {
        "use server"
        const postId = formData.get('postId');
        await deletePost(postId as string);
        redirect(`/forum/subtopic/${subtopicId}/`);
    }
    const processedContent = await remark()
    .use(html)
    .use(() => {
        return (tree: any) => { // Update the type of the 'tree' parameter
            tree.children = tree.children.filter((node: any) => { // Update the type of the 'node' parameter
                return node.type !== 'image';
            });
        };
    })
    .process(post.content);
    const contentHtml = processedContent.toString();
    console.log(contentHtml);
    return (
        <>
            <tr className="border-b-2 border-olive">
                <td className="p-3 font-medium text-gray-900 flex">
                    <div className="flex items-center no-underline text-gray-900">
                        <div className="text-3xl p-5">📄</div>
                        <div className="flex-col text-ellipsis overflow-hidden w-96">
                            <div className="font-medium text-olive hover:text-gray-800">
                                <Link href={`/forum/subtopic/${subtopicId}/post/${post.id}`}>{post.title}</Link>
                            </div>
                            <div className="font-small text-dim-gray font-normal line-clamp-2" dangerouslySetInnerHTML={{__html: contentHtml}}>
                            </div>
                        </div>
                    </div>
                </td>

                <td className="py-4 px-6">
                    {commentsCount}
                </td>
                {(await getPermissions())?.permissions.includes('delete-perm') &&
                    <td className="py-4 px-6">
                        <div>
                            <form action={handleDeletePost}>
                                <input type="hidden" name="postId" value={post.id} />
                                <button type="submit">Delete</button>
                            </form>
                        </div>
                    </td>}
            </tr>
        </>
    );
}
