import { Post } from '@/app/api/topics.types';
import Link from 'next/link';

// Add subtopicId to the props
export default function UserPostsRow({ post }: { post: Post }) {
    return (
        <tr className="border-b-2 border-olive">
            <td scope="row" className="p-2 font-medium text-gray-900 flex">
                <div className="text-5xl p-5">
                    🐈
                </div>
                <div className="flex-col">
                    <div className="font-medium text-olive">
                        <div className="font-medium text-olive">{post.title}</div>
                    </div>
                    <div className="font-small text-dim-gray font-normal">
                        {post.content}
                    </div>
                    <div className="font-light italic mt-3">
                        {post.date}
                    </div>
                </div>
            </td>
        </tr>
    );
}
