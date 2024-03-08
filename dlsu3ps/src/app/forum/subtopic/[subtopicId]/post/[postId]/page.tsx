import PostHeader from '@/components/ForumPost/PostHeader';
import UserProfile from '@/components/ForumPost/UserProfile';
import PostContent from '@/components/ForumPost/PostContent';
import CommentsSection from '@/components/ForumPost/CommentsSection';
import { posts } from '@/app/api/data';
import { users } from '@/app/api/data'; // Import your users data

export default function Page({ params }: { params: { postId: string } }) {
    const post = posts.find(post => post._id === params.postId);

    if (!post) {
        return <div>Post not found</div>;
    }

    const user = users.find(user => user._id === post.authorId);

    const profileImageUrl = user?.profilePicture || '/path/to/default/profile/image.png';
    const joinDate = user?.createdAt || 'Unknown join date';

    return (
        <article className="overflow-x-auto flex-col w-11/12">
            <section className="text-sm text-left text-gray-500 overflow-ellipsis border-solid border-2 border-olive">
                <PostHeader title={post.title} />
                <div className="border-b-2 border-olive flex p-3">
                    <UserProfile 
                      author={post.authorId} 
                      profileImageUrl={profileImageUrl} 
                      joinDate={joinDate} 
                    />
                    <PostContent>{post.content}</PostContent>
                </div>
            </section>
            <CommentsSection comments={post.comments} />
        </article>
    );
}
