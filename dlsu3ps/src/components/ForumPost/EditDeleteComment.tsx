import Link from "next/link";

export default function EditDeleteComment({postId, subtopicId, commentId}: {postId: string, subtopicId: string, commentId : string}) {
    return (
        <>
        <div className="flex flex-col">
            <Link className="text-olive font-medium text-2xl" href={`/forum/subtopic/${subtopicId}/post/${postId}/comment/${commentId}/edit`}>
                <img src="/images/editcomment/edit.png" alt="Edit" style={{width: '24px', height: '24px'}} />
            </Link>
            <Link className="text-olive font-medium text-2xl py-4" href={`/forum/subtopic/${subtopicId}/post/${postId}/comment/${commentId}/delete`}>
                <img src="/images/editcomment/delete.png" alt="Delete" style={{width: '24px', height: '24px'}} />
             </Link>
        </div>

        </>
    )
}
