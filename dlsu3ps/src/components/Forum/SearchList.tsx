import Image from "next/image";
import prisma from "@/app/lib/prisma";
import { Post } from '@prisma/client';
import UserPostsRow from "@/components/Profile/UserPostsRow";
import ForumRow from "@/components/Forum/ForumRow";

export default async function SearchList({ query }: { query: string }) {
    const posts = await prisma.post.findMany();
    const filteredPosts = posts.filter(post =>
        post.content.toLowerCase().includes(query.toLowerCase()) ||
        post.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            {posts.length === 0 ? (
                <div className="text-center py-4">
                    No Posts Yet
                </div>
            ) : filteredPosts.length === 0 ? (
                <div className="text-center py-4 font-bold">
                    No match found
                </div>
            ) : (
                <table className="w-full text-sm text-left text-gray-500 table-auto overflow-ellipsis border-solid border-2 border-olive mb-20">
                    <thead className="text-xs uppercase bg-olive text-beige">
                        <tr>
                            <th scope="col" className="pt-5 pb-3 px-6">
                                Post Title
                            </th>
                            <th scope="col" className="pt-5 pb-3 px-6">
                                Content
                            </th>
                            <th scope="col" className="pt-5 pb-3 px-6">
                                Subtopic
                            </th>
                            <th scope="col" className="pt-5 pb-3 px-6">
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPosts.map((post) => (
                            <tr key={post.id} className="border-b border-olive">
                                <td className="py-4 px-6">
                                    {post.title}
                                </td>
                                <td className="py-4 px-6">
                                    {post.content}
                                </td>
                                <td className="py-4 px-6">
                                    {post.subtopicId} 
                                </td>
                                <td className="py-4 px-6">
                                    {new Date(post.date).toLocaleDateString()} {/* Adjust format as needed */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}
