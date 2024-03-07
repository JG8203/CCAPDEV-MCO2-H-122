import { Subtopic, Topic } from './topics.types'

//export default function LatestPostColumn({subtopic}: {subtopic: Subtopic}) {
export default function LatestPostColumn() {
    return (
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
  )
}