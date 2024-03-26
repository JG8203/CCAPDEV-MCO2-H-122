import { Post } from "@prisma/client";
import Link from "next/link";

export default function EditDelete({postId, subtopicId}: {postId: string, subtopicId: string}) {
  return (
    <>
    <div className="flex justify-end">
    <Link className="text-olive font-medium text-2xl" href={`/forum/subtopic/${subtopicId}/post/${postId}/edit`}>
        <img src="/images/carousel/edit.png" alt="Edit" style={{width: '24px', height: '24px'}} />
    </Link>
    <Link className="text-olive font-medium text-2xl" href={`/forum/subtopic/${subtopicId}/post/${postId}/delete`}>
        <img src="/path-to-your-delete-icon.png" alt="Delete" style={{width: '24px', height: '24px'}} />
    </Link>
</div>

    </>

    
  )
}
