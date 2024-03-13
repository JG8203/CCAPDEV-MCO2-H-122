import UserPostsTable from "@/components/Profile/UserPostsTable";
import UserProfileBio from "@/components/Profile/UserProfileBio";
import prisma from "@/app/lib/prisma";

export default async function Page({ params }: { params: { userId: string } }) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.userId
    }
  });
  const userPosts = await prisma.post.findMany({
    where: {
      authorId: params.userId,
      isDeleted: false
    }
  });

  return (
    <div className="bg-beige font-roboto text-base text-gray-800 align-center min-h-screen flex flex-col w-full max-h-svh">
      <div className="flex justify-center w-full p-10">
        {userPosts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          <>
            <UserPostsTable posts={userPosts} />
          </>
        )}
        {user && <UserProfileBio user={user} />}
      </div>
    </div>
  );
}