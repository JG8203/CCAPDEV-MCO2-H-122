// @/components/ForumBox
import TopicHeader from './TopicHeader';
import ForumTable from './ForumTable';
import { Post, Subtopic } from '@/app/api/topics.types';

export default function ForumBox({ subtopic, posts }: { subtopic: Subtopic; posts: Post[] }) {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <div className="overflow-x-auto flex-col">
        <TopicHeader topicName={subtopic?.name} />
        <ForumTable posts={posts} />
      </div>
    </div>
  );
}
