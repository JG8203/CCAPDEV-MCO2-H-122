export default function Page(
  { params }: { 
    params: { 
      forumId: string 
      subtopicId: string
    }; 
  }) {
  return (
    <div>
      Post {params.forumId} for {params.subtopicId}
    </div>
  );
}
