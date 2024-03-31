// ForumRow.tsx
import { Post } from '@prisma/client';
import Link from 'next/link';
import prisma from '@/app/lib/prisma';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
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
        getAccessToken,
        getBooleanFlag,
        getFlag,
        getIdToken,
        getIntegerFlag,
        getOrganization,
        getPermission,
        getPermissions,
        getStringFlag,
        getUser,
        getUserOrganizations,
        isAuthenticated
    } = getKindeServerSession();
    console.log(await getPermissions());
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
                            <div className="font-small text-dim-gray font-normal line-clamp-2">
                                {post.content}
                            </div>
                        </div>
                    </div>
                </td>

                <td className="py-4 px-6">
                    {commentsCount}
                </td>
                {isAuthenticated && (await getPermissions())?.permissions.includes('delete-perm') && <div> <button>Delete</button> </div>}
            </tr>
        </>
    );
}
