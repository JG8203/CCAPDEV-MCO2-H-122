import { users, posts } from "@/app/api/data";
import UserPostsTable from "@/components/Profile/UserPostsTable";
import UserProfileBio from "@/components/Profile/UserProfileBio";

export default function Page({ params }: { params: { userId: string } }) {
  const user = users.find(user => user._id === params.userId);
  const userPosts = posts.filter(post => post.authorId === params.userId);

  return (
    <div className="bg-beige font-roboto text-base text-gray-800 align-center min-h-screen flex flex-col w-full max-h-svh">
      <div className="flex justify-center w-full p-10">
        <UserPostsTable posts={userPosts} />
        {user && <UserProfileBio user={user} />}

      </div>
    </div>
  );
}