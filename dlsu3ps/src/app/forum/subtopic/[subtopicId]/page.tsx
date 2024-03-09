import { posts, topics } from "@/app/api/data";
import ForumBox from "@/components/ForumBox";

export default function Page({ params }: { params: { subtopicId: string } }) {
  const filteredPosts = posts.filter(post => post.subtopicId === params.subtopicId);
  
  let subtopic = null;
  for (const topic of topics) {
    subtopic = topic.subtopics.find(st => st._id === params.subtopicId);
    if (subtopic) break;
  }

  return (
    <div className="bg-beige font-roboto text-base text-gray-800 align-center min-h-screen flex flex-col w-full">
        {subtopic && <ForumBox subtopic={subtopic} posts={filteredPosts}/>}
    </div>
  );
}