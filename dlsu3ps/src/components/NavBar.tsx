import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/app/lib/prisma";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import React from "react";

export default async function NavBar() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const currentUser = await getUser();

    let userObject = null;
    if (await isAuthenticated()) {
        try {
            userObject = await prisma.user.findUnique({
                where: {
                    kindeId: currentUser?.id,
                },
            });
        } catch (error) {
            console.error("Error retrieving user object:", error);
        }
    }

    // @ts-ignore
    return (
        <header className="flex h-20 justify-between items-center bg-wow-yellow p-0 px-10 sticky top-0 z-50">
                <Link href="/" className="text-beige no-underline flex items-center">
                    <Image
                        src={"/images/logo/dlsu3pslogo.svg"}
                        alt="logo"
                        width={36} 
                        height={36} 

                    />
                    <h1 className="m-0 pl-2 text-3xl font-bold">DLSU3PS</h1>
                </Link>
                <SearchBar></SearchBar>

            <nav className="flex">
                <Link href="/about" className="text-beige no-underline mx-5 hover:text-gray-800">About</Link>
                <Link href="/forum" className="text-beige no-underline mx-5 hover:text-gray-800">Forums</Link>
                {await isAuthenticated() ? (
                    <>
                        <Link href={`/profile/${userObject?.id}`} className="text-beige no-underline mx-5 hover:text-gray-800">Profile</Link>
                        <LogoutLink className="text-beige no-underline mx-5 hover:text-gray-800">Log out</LogoutLink>
                    </>
                ) : (
                    <Link href="/login" className="text-beige no-underline mx-5 hover:text-gray-800">Login</Link>
                )}
            </nav>
        </header>
    );
}