import Image from "next/image";
import prisma from "@/app/lib/prisma";
import { Post } from '@prisma/client';
import UserPostsRow from "@/components/Profile/UserPostsRow";
import ForumTable from "@/components/Forum/ForumTable";
import ForumRow from "@/components/Forum/ForumRow";

export default async function SearchList({query}: {query: string}) {
    const posts = await prisma.post.findMany();
    const filteredPosts = Array.isArray(posts) ? posts.filter((post) => {
        return post.content.toLowerCase().includes(query.toLowerCase()) || post.title.toLowerCase().includes(query.toLowerCase());
    }) : [];

    return (
        <>
            {Array.isArray(posts) && posts.length === 0 && (
                <td colSpan={2} className="text-center py-4">
                No Posts Yet
                </td>)}

                <div className="" >
                    <div className="flex flex-col justify-center items-center p-10">
                    <table
                        className="w-full text-sm text-left text-gray-500 table-auto overflow-ellipsis border-solid border-2 border-olive mb-20">
                        <thead className="text-xs uppercase bg-olive text-beige">
                            <tr>
                            <th scope="col" className="pt-5 pb-4 px-9">
                                Forum
                            </th>
                            
                            <th scope="col" className="pt-5 pb-4 px-6">
                                Threads
                            </th>
                            <th scope="col" className="pt-5 pb-4 px-6">
                                Posts
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                        </table>
                    </div>
                </div>
        </>
    );
}
