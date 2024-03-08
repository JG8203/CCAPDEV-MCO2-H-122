import { FC } from "react";
import { Comment as CommentType } from "../../app/api/topics.types";

interface CommentProps {
    comment: CommentType;
}

const Comment: FC<CommentProps> = ({ comment }) => { //I just wanted to try using FC to type the component
    if (comment.deleted) return null; // Optionally hide deleted comments

    return (
        <div className="comment">
            <p>{comment.content}</p>
        </div>
    );
};

export default Comment;