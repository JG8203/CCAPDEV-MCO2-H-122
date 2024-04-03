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

            <div className="bg-beige font-roboto text-base text-gray-800 align-center min-h-screen flex flex-col w-full max-h-svh">
                {Array.isArray(posts) && filteredPosts.length === 0 ? (
                    <td colSpan={2} className="text-center py-4 font-bold">
                        No match found</td>
                ) : (
                    filteredPosts.map((post) => (
                            <div key={post.id} className="flex flex-col">
                                <div className="flex space-x-6 items-center">
                                    <UserPostsRow post={post} />
                                    <ForumRow post={post} subtopicId={post.subtopicId}/>
                                </div>
                            </div>
                        ))
                    )}
                    <div className="flex justify-center w-full p-10">
                </div>
            </div>
        </>
    );
}
