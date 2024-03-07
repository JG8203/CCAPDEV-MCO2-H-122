import { Subtopic, Topic } from './topics.types'

export default function SubtopicRow({subtopic}: {subtopic: Subtopic}) {
    return (
    <tr className="border-b-2 border-olive">
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
        <td className="py-4 px-6 overflow-hidden overflow-ellipsis">
          <a href="View-Post-Snowflake.html" className="flex items-center no-underline text-gray-900">
            <div className="w-10 h-10 bg-whitesmoke rounded-full border border-transparent mx-4 flex-shrink-0 overflow-hidden">
              <img src={"../dlsu3ps/public/image/users/catuser0.png"} />
            </div>
            <div className="flex-col">
              <div className="font-semibold text-olive">
                [ADMIN] NO POSTING OF NANGANGALMOT INCIDENCES
              </div>
              <div className="font-semi text-burnt-sienna">
                by ADMIN#1
              </div>
            </div>
          </a>
        </td>
        <td className="py-4 px-6">
          1
        </td>
        <td className="py-4 px-6">
          2
        </td>
    </tr>
  )
}