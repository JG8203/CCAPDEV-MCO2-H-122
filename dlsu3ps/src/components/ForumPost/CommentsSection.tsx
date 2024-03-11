import PostContent from './PostContent';
import { Comment } from '@prisma/client';

export default function CommentsSection({ comments } : { comments: Comment[] }) {
  return (
    <div>
      {comments.map(comment => (
        <PostContent key={comment.id}>{comment.content}</PostContent>
      ))}
    </div>
  );
}
