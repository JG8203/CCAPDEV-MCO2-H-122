"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Dialog from "@/components/Dialog";

export default function EditDeleteComment({postId, subtopicId, commentId, content}: {postId: string, subtopicId: string, commentId : string, content: string}) {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <>
            <div className="flex flex-col">
                <Link className="text-olive font-medium text-2xl" href={`/forum/subtopic/${subtopicId}/post/${postId}/comment/${commentId}/edit`}>
                    <Image src="/images/editcomment/edit.png" alt="Edit" width={24} height={24} />
                </Link>
                <Link href="#" className="text-olive font-medium text-2xl py-4" onClick={(e) => {e.preventDefault(); setShowDialog(true);}}>
                        <Image src="/images/editcomment/delete.png" alt="Delete" width={24} height={24}/>

                </Link>
                {showDialog && <Dialog title={"Confirm Delete?"} commentId={commentId} onClose={() => setShowDialog(false)}>
                    {content}
                </Dialog>}
            </div>
        </>
    )
}
