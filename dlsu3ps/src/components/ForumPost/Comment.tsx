import { FC } from "react";
import { Comment } from '@prisma/client'

export default function Comment({ comment }: {comment: Comment}) {
    if (comment.isDeleted) return null; // Optionally hide deleted comments

    return (
        <div className="comment">
            <p>{comment.content}</p>
        </div>
    );
}