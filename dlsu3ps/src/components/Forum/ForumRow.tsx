// ForumRow.tsx
import { Post } from '@/app/api/topics.types';
import Link from 'next/link';

// Add subtopicId to the props
export default function ForumRow({ post, subtopicId }: { post: Post; subtopicId: string }) {
    const commentsCount = post.comments.length + 1;
    return (
        <>
        <tr className="border-b-2 border-olive">
        <td className="p-3 font-medium text-gray-900 flex">
            <div className="text-3xl p-5">📄</div>
            <div className="flex-col">
                <div className="font-medium text-olive">
                    <Link href={`/forum/subtopic/${subtopicId}/post/${post._id}`}>{post.title}</Link>
                </div>
                <div className="font-small text-dim-gray font-normal line-clamp-2">
                    {post.content.substring(0, 100)}...
                </div>
            </div>
        </td>
        <td className="py-4 px-6">
            {new Date(post.date).toLocaleDateString()}
        </td>
        <td className="py-4 px-6">
            {commentsCount}
        </td>
    </tr>
    </>
    );
}
