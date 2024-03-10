import PostContent from './PostContent';
import Comment from './Comment';

export default function CommentsSection({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <PostContent key={comment.id}>{comment.content}</PostContent>
      ))}
    </div>
  );
}
