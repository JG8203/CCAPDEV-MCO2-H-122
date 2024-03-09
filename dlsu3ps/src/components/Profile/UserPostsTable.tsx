import { Post } from "@/app/api/topics.types";
import UserPostsRow from "./UserPostsRow";

export default function UserPostsTable({ posts }: { posts: Post[] }) {

    return (
        <div className="">
            <table className="basis-4/5 text-sm text-left text-gray-500 table-fixed overflow-ellipsis border-solid border-2 border-olive mb-20">
                <thead className="text-lg uppercase bg-olive text-beige">
                    <tr>
                        <th scope="col" className="pt-3 pb-3 px-5">
                            Posts
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <UserPostsRow post={post} />
                    ))}

                </tbody>
            </table>

        </div>

    );
}