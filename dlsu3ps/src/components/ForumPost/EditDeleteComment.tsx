import Link from "next/link";

export default function EditDeleteComment({postId, subtopicId, commentId}: {postId: string, subtopicId: string, commentId : string}) {
    return (
        <>
            <div className="flex justify-end">
                <Link className="text-olive font-medium text-2xl" href={`/forum/subtopic/${subtopicId}/post/${postId}/comment/${commentId}/edit`}>✏️</Link>
                <Link className="text-olive font-medium text-2xl" href={`/forum/subtopic/${subtopicId}/post/${postId}/comment/${commentId}/delete`}>🗑️</Link>
            </div>
        </>
    )
}
