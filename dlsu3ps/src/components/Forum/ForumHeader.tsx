import Link from "../../../node_modules/next/link";

export default function ForumHeader({ topicName, subtopicId }: { topicName: string; subtopicId: string }) {
  return (
    <div className="mb-5 flex flex-row items-center justify-between">
      <span className="text-5xl font-bold text-burnt-sienna">{topicName}</span>
      <div className="flex">
        <Link href={`/forum/subtopic/${subtopicId}/create`} className="mx-2 bg-burnt-sienna p-3 hover:bg-orange-800 rounded-md font-semibold text-white hover:text-slate-200">
          Create Post
        </Link>
      </div>
    </div>
  )
}
