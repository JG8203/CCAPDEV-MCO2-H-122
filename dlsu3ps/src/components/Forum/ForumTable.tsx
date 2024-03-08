// ForumTable.tsx
import { Post } from '@/app/api/topics.types';
import ForumRow from './ForumRow';

export default function ForumTable({ posts, subtopicId }: { posts: Post[]; subtopicId: string }) {
  return (
    <table className="w-full text-sm text-left text-gray-500 table-auto overflow-clip border-solid border-2 border-burnt-sienna">
      <thead className="text-xs uppercase bg-olive text-beige">
        <tr>
          <th scope="col" className="pt-5 pb-3 px-6">Forum</th>
          <th scope="col" className="pt-5 pb-3 px-6">Latest Post</th>
          <th scope="col" className="pt-5 pb-3 px-6">Posts</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          // Pass subtopicId to each ForumRow
          <ForumRow key={post._id} post={post} subtopicId={subtopicId} />
        ))}
      </tbody>
    </table>
  );
}
