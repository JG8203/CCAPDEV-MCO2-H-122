import { User as UserType } from "../../app/api/topics.types";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface UserProfileProps {
  author: string;
  profileImageUrl: string;
  joinDate: Date;
  userId: string;
}

export default function UserProfile({ author, profileImageUrl, joinDate, userId}: UserProfileProps) {
  return (
    <div className="flex flex-col justify-center items-center">
        <Link href={`/profile/${userId}`}>

        <div className="font-medium text-olive">{author}</div>
        </Link>
      <div className="bg-dim-gray rounded-lg border-2 w-36 h-36 relative">
          <Link href={`/profile/${userId}`}>
          <Image
            src={profileImageUrl}
            alt=""
            layout="fill"
            objectFit="cover"
            className="w-34 h-34"
          />
          </Link>
      </div>

      <div className="font-small text-dim-gray font-normal">Joined {joinDate.toDateString()}</div>
    </div>
  );
}
