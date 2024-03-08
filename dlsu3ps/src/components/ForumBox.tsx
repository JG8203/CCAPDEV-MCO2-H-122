import ForumHeader from './Forum/ForumHeader';
import ForumTable from './Forum/ForumTable';
import { Post, Subtopic } from '@/app/api/topics.types';

export default function ForumBox({ subtopic, posts }: { subtopic: Subtopic; posts: Post[] }) {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <div className="overflow-x-auto flex-col">
        <ForumHeader topicName={subtopic?.name} subtopicId={subtopic._id}/>
        <ForumTable posts={posts} subtopicId = {subtopic._id}/>
      </div>
    </div>
  );
}
