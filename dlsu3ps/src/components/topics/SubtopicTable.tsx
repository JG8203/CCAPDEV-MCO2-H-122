import SubtopicRow from '@/components/Topics/TopicsTableComponents/SubtopicRow'
import { Subtopic } from "../../app/api/topics.types";

export default function SubtopicTable({ subtopics }: { subtopics: Subtopic[] }) {
  return (
    <table
      className="w-full text-sm text-left text-gray-500 table-auto overflow-ellipsis border-solid border-2 border-olive mb-20">
      <thead className="text-xs uppercase bg-olive text-beige">
        <tr>
          <th scope="col" className="pt-5 pb-3 px-6">
            Forum
          </th>
          <th scope="col" className="pt-5 pb-3 px-6">
            Latest Post
          </th>
          <th scope="col" className="pt-5 pb-3 px-6">
            Threads
          </th>
          <th scope="col" className="pt-5 pb-3 px-6">
            Posts
          </th>
        </tr>
      </thead>
      <tbody>
        {subtopics.map(subtopic => (
          <SubtopicRow key={subtopic.id} subtopic={subtopic} />
        ))}
      </tbody>
    </table>
  )
}