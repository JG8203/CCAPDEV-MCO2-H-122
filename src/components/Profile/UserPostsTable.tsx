import UserPostsHeader from "./UserPostsHeader";
import UserPostsRow from "./UserPostsRow";
import type { Post } from '@prisma/client'

export default function UserPostsTable({ posts }: { posts: Post[] }) {
    return (
        <div className="">
            <table className="basis-4/5 text-sm text-left text-gray-500 table-fixed overflow-ellipsis border-solid border-2 border-olive mb-20">
                <UserPostsHeader />
                <tbody>
                    {posts.length === 0 ? (
                        <tr>
                            <td colSpan={3} className="w-96 min-h-32 p-9 font-medium text-gray text-center">User has no posts</td>
                        </tr>
                    ) : (
                        posts.map(post => (
                            <UserPostsRow post={post} key={post.id}/>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
