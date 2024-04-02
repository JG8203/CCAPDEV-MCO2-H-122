// ForumTable.tsx
import ForumRow from './ForumRow';
import prisma from '@/app/lib/prisma';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { Post } from '@prisma/client';

export default function ForumTable({ posts, subtopicId }: { posts: Post[]; subtopicId: string }) {
  const {
    getPermissions,
  } = getKindeServerSession();
  const nonDeletedPosts = posts.filter(post => post.isDeleted === false);
  return (
    <table className="w-full text-sm text-left text-gray-500 table-fixed overflow-clip border-solid border-2 border-olive">
      <thead className="text-xs uppercase bg-olive text-beige">
        <tr>
          <th scope="col" className="pt-5 pb-4 px-6">Forum</th>
          <th scope="col" className="pt-5 pb-4 px-4">Posts</th>
          <th scope="col" className="pt-5 pb-4 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {nonDeletedPosts.length === 0 ? (
          <tr>
            <td colSpan={2} className="text-center py-4">
              No posts yet
            </td>
          </tr>
        ) : (
          posts.filter(post => !post.isDeleted).map((post) => (
            <ForumRow key={post.id} post={post} subtopicId={subtopicId} />
          ))
        )}
      </tbody>
    </table>
  );
}
