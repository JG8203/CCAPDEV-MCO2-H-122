import { FC } from "react";
import { Comment as CommentType } from '@prisma/client';

export default function Comment({ comment }: {comment: CommentType}) {
    if (comment.isDeleted) return null; // Optionally hide deleted comments

    return (
        <div className="comment">
            <p>{comment.content}</p>
        </div>
    );
}
