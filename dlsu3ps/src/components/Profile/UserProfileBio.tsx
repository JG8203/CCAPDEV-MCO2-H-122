import { User } from '@prisma/client'
import Link from 'next/link';
import Image from 'next/image';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import prisma from '@/app/lib/prisma';

export default async function UserProfileBio({ user }: { user: User }) {
    const { getUser } = getKindeServerSession();
    const userObject = await getUser();
    const kindeId = userObject?.id;
    const currentUser = await prisma.user.findUnique({
        where: {
            kindeId: kindeId!,
        },
    });
    return (
        <div className="max-h-full bg-burnt-sienna rounded-lg shadow-lg p-4 flex flex-col items-center basis-1/5 ml-20">
            <div className="bg-beige h-48 w-64 rounded-lg mb-4 relative">
                <Image
                    src={user.profileImage || "https://picsum.photos/200"}
                    alt="Profile Image"
                    layout="fill"
                    objectFit="cover"
                    className="w-34 h-34"
                />
            </div>

            <div className="text-center mb-4">
                <p className="text-white font-bold">{user.username}</p>
                <p className="text-slate-200 font-semibold italic">{user.favoriteCat || "No fave cat :("}</p>
                <p className="text-white font-light">{user.bio}</p>
            </div>
            {currentUser?.id === user.id && (
                <Link href={`/profile/${user.id}/edit`} className="bg-beige p-2 rounded-md text-burnt-sienna font-semibold hover:bg-orange-800 hover:text-slate-200">
                    Edit Profile
                </Link>
            )}
        </div>
    );
}
