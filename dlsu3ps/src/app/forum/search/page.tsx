
import prisma from "@/app/lib/prisma";
import SubtopicTable from "@/components/topics/SubtopicTable";
import SearchBar from "@/components/SearchBar";
import SearchList from "@/components/Forum/SearchList";
export default async function Page({searchParams} : {searchParams?: { query? : string};
}) {
const query = searchParams?.query || "";



    return (
        <div className="bg-beige font-roboto text-base text-gray-800 align-center min-h-screen flex flex-col w-full max-h-svh">
        <SearchList query = {query}/>
        </div>
    );
}