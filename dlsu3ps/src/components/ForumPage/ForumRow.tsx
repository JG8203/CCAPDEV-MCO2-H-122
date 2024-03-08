import { Post } from "@/app/api/topics.types";

export default function ForumRow({ post }: { post: Post }) {
    const commentsCount = post.comments.length + 1;
    return (
        <tr className="border-b-2 border-olive">
        <td className="p-3 font-medium text-gray-900 flex">
            <div className="text-3xl p-5">📄</div>
            <div className="flex-col">
                <div className="font-medium text-olive">{post.title}</div>
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
  );
}
  