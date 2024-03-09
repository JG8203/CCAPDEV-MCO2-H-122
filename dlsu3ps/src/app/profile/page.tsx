import { users, posts } from "@/app/api/data";
import UserPostsTable from "@/components/Profile/UserPostsTable";
import UserProfileBio from "@/components/Profile/UserProfileBio";

export default function Page({ params }: { params: { userId: string } }) {
  const user = users.find(user => user._id === params.userId);
  const userPosts = posts.filter(post => post.authorId === params.userId);

  return (
      <div>
        <UserPostsTable posts={userPosts} />
        {user && <UserProfileBio user={user} />}
                  
      </div>
  );
}