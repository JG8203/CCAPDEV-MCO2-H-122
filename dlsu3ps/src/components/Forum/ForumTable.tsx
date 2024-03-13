// ForumTable.tsx
import ForumRow from './ForumRow';
import prisma from '@/app/lib/prisma';
import { Post } from '@prisma/client';
export default function ForumTable({ posts, subtopicId }: { posts: Post[]; subtopicId: string }) {
  return (
    <table className="w-full text-sm text-left text-gray-500 table-fixed overflow-clip border-solid border-2 border-olive">
      <thead className="text-xs uppercase bg-olive text-beige">
        <tr>
          <th scope="col" className="pt-5 pb-4 px-6">Forum</th>
          <th scope="col" className="pt-5 pb-4 px-4">Posts</th>
        </tr>
      </thead>
      <tbody>
        {posts.filter(post => !post.isDeleted).map((post) => (
          <ForumRow key={post.id} post={post} subtopicId={subtopicId} />
        ))}

      </tbody>
    </table>
  );
}
