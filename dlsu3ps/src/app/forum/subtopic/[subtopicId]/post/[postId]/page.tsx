import PostHeader from '@/components/ForumPost/PostHeader';
import UserProfile from '@/components/ForumPost/UserProfile';
import PostContent from '@/components/ForumPost/PostContent';
import CommentsSection from '@/components/ForumPost/CommentsSection';
import Vote from '@/components/ForumPost/Vote';
import prisma from '@/app/lib/prisma';
import { Post } from '@/app/api/topics.types';

export async function getPost(postId: string) {
    // Fetch the post and include the author and comments
    const post = await prisma.post.findUnique({
        where: { id: postId },
        include: {
            user: true,
            comments: true,
        }
    });
    if (!post) {
        return { notFound: true };
    }
    return post;
}

export default async function Page({ params }: { params: { subtopicId: string, postId: string } }) {
    const fetchedPost = await getPost(params.postId);
    const profileImageUrl = fetchedPost.user?.profileImage || '';
    const joinDate = fetchedPost.user?.createdAt ? new Date(fetchedPost.user.createdAt).toLocaleString('default', { month: 'long', year: 'numeric' }) : ''; // when u are in a cursed code competition tapos lumabas ako -gilo
    return (
        <main className="flex flex-col justify-center items-center p-5">
            <div className='rounded-md shadow'>
                <div className='px-2 py-2 flex justify-between'>
                    <Vote />
                    <article className="overflow-x-auto flex-col w-11/12">
                        <section className="text-sm text-left text-gray-500 overflow-ellipsis border-solid border-2 border-olive">
                            <PostHeader title={fetchedPost.title} />
                            <div className="border-b-2 border-olive flex p-3">
                                <UserProfile
                                    author={fetchedPost.user?.username} // Adjust according to your schema, e.g., firstName + lastName
                                    profileImageUrl={profileImageUrl}
                                    joinDate={joinDate}
                                />
                                <PostContent>{fetchedPost.content}</PostContent>
                            </div>
                        </section>
                        <CommentsSection comments={fetchedPost.comments} />
                    </article>
                </div>
            </div>
        </main>
    );
}