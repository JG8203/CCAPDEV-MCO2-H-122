import Link from "next/link";
import Image
 from "next/image";
export default function EditDeleteComment({postId, subtopicId, commentId}: {postId: string, subtopicId: string, commentId : string}) {
    return (
        <>
        <div className="flex flex-col">
            <Link className="text-olive font-medium text-2xl" href={`/forum/subtopic/${subtopicId}/post/${postId}/comment/${commentId}/edit`}>
                <Image src="/images/editcomment/edit.png" alt="Edit" width={24} height={24} />
            </Link>
            <Link className="text-olive font-medium text-2xl py-4" href={`/forum/subtopic/${subtopicId}/post/${postId}/comment/${commentId}/delete`}>
                <Image src="/images/editcomment/delete.png" alt="Delete" width={24} height={24}/>
             </Link>
        </div>

        </>
    )
}
