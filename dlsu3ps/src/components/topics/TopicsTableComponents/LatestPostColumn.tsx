import { Post, Subtopic, Topic } from '../../../app/api/topics.types'

export default function LatestPostColumn({ post }: { post: Post }) {
    return (
        <td className="py-4 px-6 overflow-hidden overflow-ellipsis">
          <a href="View-Post-Snowflake.html" className="flex items-center no-underline text-gray-900">
            <div className="w-10 h-10 bg-whitesmoke rounded-full border border-transparent mx-4 flex-shrink-0 overflow-hidden">
              <img src={"../dlsu3ps/public/image/users/catuser0.png"} />
            </div>
            <div className="flex-col">
              <div className="font-semibold text-olive hover:text-gray-800">
                {post.title}
              </div>
              <div className="font-semi text-burnt-sienna hover:text-gray-800">
                by {post.authorId}
              </div>
            </div>
          </a>
        </td>
  )
}