import prisma from "@/app/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
export default async function SearchBar(className: string | undefined){
    return (
            <form className="w-4/12 ml-5">
                <div className="flex">
                    <label htmlFor="search-dropdown"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                    <button id="dropdown-button" data-dropdown-toggle="dropdown"
                            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-beige bg-olive border-beige-300 rounded-s-lg hover:bg-beige hover:text-olive focus:ring-1 focus:outline-none focus:ring-olive dark:bg-olive dark:hover:bg-olive-600 dark:focus:ring-gray-700 dark:text-beige dark:border-olive-600"
                            type="button">All categories <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="m1 1 4 4 4-4"/>
                    </svg></button>
                    <div id="dropdown"
                        className="z-10 hidden bg-beige divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-olive-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button"
                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="relative w-full">
                        <input type="search" id="search-dropdown"
                            className="block p-2.5 w-full z-20 text-sm text-olive-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-white focus:ring-olive focus:border-olive dark:bg-white dark:placeholder-olive-400 dark:text-olive dark:focus:border-olive"
                            placeholder="Search cattos around the campus..." required/>
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
    );
}