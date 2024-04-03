"use client";
import prisma from "@/app/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import {useSearchParams, usePathname, useRouter} from "next/navigation";
import React, {FormEvent, useState} from "react";

export default function SearchBar(){
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState("");
    const pathname = usePathname();
    const {replace} = useRouter();
    const handleSearch = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchTerm) {
            replace(`/forum/search?query=${searchTerm}`);
        }
    };
    return (
        <>
            <form className="w-4/12 ml-5" onSubmit={handleSearch}>
                <div className="flex">
                    <div className="relative w-full">
                        <input type="search" id="search-dropdown"
                            className="block p-2.5 w-full z-20 text-sm text-olive-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-white focus:ring-olive focus:border-olive dark:bg-white dark:placeholder-olive-400 dark:text-olive dark:focus:border-olive"
                            placeholder="Search cattos around the campus..."
                               onChange={(e) => setSearchTerm(e.target.value)}
                               required/>
                        <button type="submit" 
                                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-beige bg-olive rounded-e-lg border border-olive hover:bg-beige hover:text-olive focus:ring-1 focus:outline-none focus:ring-olive dark:bg-olive dark:hover:bg-olive dark:focus:ring-olive">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>

        </>
    );
}