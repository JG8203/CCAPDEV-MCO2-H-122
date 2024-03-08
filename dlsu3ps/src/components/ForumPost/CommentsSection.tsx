import Comment from './Comment';

export default function CommentsSection({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <PostContent key={comment._id} comment={comment} />
      ))}
    </div>
  );
}
