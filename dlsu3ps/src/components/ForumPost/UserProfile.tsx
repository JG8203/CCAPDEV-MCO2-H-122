import { User as UserType } from "../../app/api/topics.types";
import { FC } from "react";
import Image from "next/image";

interface UserProfileProps {
  author: string;
  profileImageUrl: string;
  joinDate: Date;
}

export default function UserProfile({ author, profileImageUrl, joinDate }: UserProfileProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-medium text-olive">{author}</div>
      <div className="bg-dim-gray rounded-lg border-2 w-36 h-36 relative">
          <Image
            src={profileImageUrl}
            alt=""
            layout="fill"
            objectFit="cover"
            className="w-34 h-34"
          />
      </div>
      <div className="font-small text-dim-gray font-normal">Joined {joinDate.toDateString()}</div>
    </div>
  );
}
