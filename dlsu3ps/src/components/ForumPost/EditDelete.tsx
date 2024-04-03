"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DialogPost from "@/components/DialogPost";


export default function EditDelete({postId, subtopicId}: {postId: string, subtopicId: string}) {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <>
            <div className="flex justify-end">
                <Link className="text-olive font-medium text-2xl" href={`/forum/subtopic/${subtopicId}/post/${postId}/edit`}>✏️</Link>
                <Link href="#" className="text-olive font-medium text-2xl" onClick={() => setShowDialog(true)}>🗑️</Link>
            </div>
            {showDialog && <DialogPost title={"Confirm Delete?"} postId={postId} subtopicId={subtopicId} onClose={() => setShowDialog(false)}>
                Are you sure you want to delete this post?
            </DialogPost>}
        </>
    )
}
