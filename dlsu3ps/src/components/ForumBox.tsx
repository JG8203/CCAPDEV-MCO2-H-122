import ForumHeader from './Forum/ForumHeader';
import ForumTable from './Forum/ForumTable';
import { Post, Subtopic } from '@prisma/client';

export default function ForumBox({ subtopic, posts }: { subtopic: Subtopic; posts: Post[] }) {
  return (
    <div className="flex flex-col justify-center items-center pl-32 pr-32 pt-12">
      <div className="overflow-x-auto flex-col">
        <ForumHeader topicName={subtopic?.name} subtopicId={subtopic.id}/>
        <ForumTable posts={posts} subtopicId = {subtopic.id}/>
      </div>
    </div>
  );
}
