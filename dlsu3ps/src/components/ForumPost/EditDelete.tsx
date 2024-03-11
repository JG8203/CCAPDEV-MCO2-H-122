import { Post } from "@prisma/client";
import Link from "next/link";

export default function EditDelete({postId, subtopicId}: {postId: string, subtopicId: string}) {
  return (
    <>
    <div className="flex justify-end">
        <Link className="text-olive font-medium text-2xl" href={`/forum/subtopic/${subtopicId}/post/${postId}/edit`}>✏️</Link>
        <Link className="text-olive font-medium text-2xl" href={`/forum/subtopic/${subtopicId}/post/${postId}/delete`}>🗑️</Link>
    </div>
    </>
  )
}
