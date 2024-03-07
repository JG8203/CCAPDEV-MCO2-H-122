import { Subtopic, Topic } from './topics.types'

//export default function LatestPostColumn({subtopic}: {subtopic: Subtopic}) {
export default function SubtopicColumn({subtopic}: {subtopic: Subtopic}) {
    return (
        <td scope="row" className="p-3 font-medium text-gray-900 flex">
          <a href="SnowflakeList.html" className="flex items-center no-underline text-gray-900">
            <div className="text-3xl p-5">
              🐈
            </div>
            <div className="flex-col">
              <div className="font-medium text-olive">
                {subtopic.name}
              </div>
              <div className="font-small text-dim-gray font-normal">
                {subtopic.description}
              </div>
            </div>
          </a>
        </td>
  )
}