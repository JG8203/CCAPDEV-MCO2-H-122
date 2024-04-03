import PostContent from './PostContent';
import { Comment as CommentType } from '@prisma/client';
import Comment from './Comment';

export default function CommentsSection({ comments } : { comments: CommentType[] }) {
  return (
      <div>
        {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
        ))}
      </div>
  );
}
