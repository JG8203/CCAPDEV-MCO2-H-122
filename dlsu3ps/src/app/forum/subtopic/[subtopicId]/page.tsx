import ForumBox from "@/components/ForumBox";
import prisma from "@/app/lib/prisma";

export default async function Page({ params }: { params: { subtopicId: string } }) {

  const filteredPosts = await prisma.post.findMany({
    where: {
      subtopicId: params.subtopicId
    },
    include: {
      comments: true
    }
  });

  const subtopic = await prisma.subtopic.findUnique({
    where: {
      id: params.subtopicId
    }
  });
  
  return (
    <div className="bg-beige font-roboto text-base text-gray-800 align-center min-h-screen flex flex-col w-screen">
        {subtopic && <ForumBox subtopic={subtopic} posts={filteredPosts}/>} {/* shoudlve used composition here but we crammed too much */}
    </div>
  );
}
