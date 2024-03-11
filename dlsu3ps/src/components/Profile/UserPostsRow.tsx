import type { Post } from '@prisma/client'
import Link from 'next/link';

export default function UserPostsRow({ post }: { post: Post }) {
    console.log(post);
    return (
        <tr className="border-b-2 border-olive">
            <td scope="row" className="p-2 font-medium text-gray-900 flex">
                <div className="text-5xl p-5">
                    🐈
                </div>
                <div className="flex-col">
                    <div className="font-medium text-olive">
                        <Link href={`/forum/subtopic/${post.subtopicId}/post/${post.id}`} className="font-medium text-olive">{post.title}</Link>
                    </div>
                    <div className="font-small text-dim-gray font-normal line-clamp-2">
                        {post.content}
                    </div>
                    <div className="font-light italic mt-3">
                        {post.date?.toString() || 'No date'}
                    </div>
                </div>
            </td>
        </tr>
    );
}
