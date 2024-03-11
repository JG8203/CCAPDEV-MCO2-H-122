import UserPostsHeader from "./UserPostsHeader";
import UserPostsRow from "./UserPostsRow";
import type { Post } from '@prisma/client'

export default function UserPostsTable({ posts }: { posts: Post[] }) {
    return (
        <div className="">
            <table className="basis-4/5 text-sm text-left text-gray-500 table-fixed overflow-ellipsis border-solid border-2 border-olive mb-20">
                <UserPostsHeader />
                <tbody>
                    <div className="overflow-y-scroll max-h-96">
                    {posts.map(post => (
                        <UserPostsRow post={post} key={post.id}/>
                    ))}
                    </div>
                </tbody>
            </table>

        </div>

    );
}