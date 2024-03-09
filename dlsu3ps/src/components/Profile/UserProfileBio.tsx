import { User } from '@/app/api/topics.types';
import Link from 'next/link';
import Image from '../../../node_modules/next/image';

// Add subtopicId to the props
export default function UserProfileBio({ user }: { user: User }) {
    return (
        <div className="bg-burnt-sienna rounded-lg shadow-lg p-4 flex flex-col items-center basis-1/5 ml-20">
            
            <div className="bg-beige h-48 w-48 rounded-lg mb-4">
                <Image
                src={user.profilePicture}
                alt="Image description"
                className="w-full h-full object-cover" />
            </div>
            <div className="text-center mb-4">
                <p className="text-white font-bold">{user.username}</p>
                <p className="text-slate-200 font-semibold italic">Ginger</p> {/*needsfavcatto*/}
                <p className="text-white font-light">{user.bio}</p>
            </div>

        </div>
    );
}
