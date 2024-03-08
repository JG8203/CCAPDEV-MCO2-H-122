import Link from '../../../../node_modules/next/link'
import { Subtopic, Topic } from '../../../app/api/topics.types'

//export default function LatestPostColumn({subtopic}: {subtopic: Subtopic}) {
export default function SubtopicColumn({ subtopic }: { subtopic: Subtopic }) {
  return (
    <td scope="row" className="p-3 font-medium text-gray-900 flex">
      <div className="flex items-center no-underline text-gray-900">
        <div className="text-3xl p-5">
          🐈
        </div>
        <div className="flex-col">
          <div className="font-medium text-olive hover:text-gray-800">
            <Link href={`/forum/subtopic/${subtopic._id}`}>{subtopic.name}</Link>
          </div>
          <div className="font-small text-dim-gray font-normal hover:text-gray-800">
            <Link href={`/forum/subtopic/${subtopic._id}`}>{subtopic.description}</Link>
          </div>
        </div>
      </div>
    </td>
  )
}