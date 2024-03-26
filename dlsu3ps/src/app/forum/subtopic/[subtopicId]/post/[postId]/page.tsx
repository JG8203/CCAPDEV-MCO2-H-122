import PostHeader from '@/components/ForumPost/PostHeader';
import UserProfile from '@/components/ForumPost/UserProfile';
import PostContent from '@/components/ForumPost/PostContent';
import Vote from '@/components/ForumPost/Vote';
import prisma from '@/app/lib/prisma';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import EditDelete from '@/components/ForumPost/EditDelete';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import EditDeleteComment from "@/components/ForumPost/EditDeleteComment";

async function getPost(postId: string) {
  const post = await prisma.post.findUnique({
    where: { id: postId },
    include: {
      user: true,
      comments: true,
    }
  });
  if (!post) {
    return null;
  }
  return post;
}



export default async function Page({ params }: { params: { subtopicId: string, postId: string } }) {
  const { getUser } = getKindeServerSession();
  const userObject = await getUser();
  const fetchedPost = await getPost(params.postId);
  const currentUser = await prisma.user.findUnique({
    where: {
      kindeId: userObject?.id,
    },
  });
  const kindeId = userObject?.id;

  if (!fetchedPost || fetchedPost.isDeleted) {
    return notFound();
  }
  async function formAction(formData: FormData) {
    "use server";

    const content = formData.get('content');
    const postId = params.postId;

    try {
      const user = await prisma.user.findUnique({
        where: {
          kindeId: kindeId!,
        },
      });
      const comment = await prisma.comment.create({
        data: {
          content: content as string,
          authorId: user?.id!,
          postId: postId,
          date: new Date()
        },
      });
    } catch (error) {
      console.error('Failed to create post:', error);
    } finally {
      const { subtopicId, postId } = params;
      redirect(`/forum/subtopic/${subtopicId}/post/${postId}`);
    }
  }

  const profileImageUrl = fetchedPost.user?.profileImage || '';

  return (
    <main className="flex flex-col justify-center items-center p-9">
      <Link href={`/forum/subtopic/${params.subtopicId}/post/${params.postId}/create`} className="mx-2 bg-burnt-sienna p-3 hover:bg-orange-800 rounded-md font-semibold text-white hover:text-slate-200 self-end">
        Create Post
      </Link>
      <div className='rounded-md shadow'>
        <div className='px-2 py-2 flex justify-between'>
          <Vote postId={params.postId} subtopicId={params.subtopicId} />
          <article className="overflow-x-auto flex-col w-11/12">
            <section className="text-sm text-left text-gray-500 overflow-ellipsis border-x-2 border-olive">
              <PostHeader title={fetchedPost.title} />
              {currentUser?.id === fetchedPost.user.id && <EditDelete postId={params.postId} subtopicId={params.subtopicId} />}
              <div className="border-b-2 border-olive flex p-3">
                {/*Make it so that this only accepts the user object instead of the user id*/}
                <UserProfile
                  author={fetchedPost.user?.username}
                  profileImageUrl={profileImageUrl}
                  joinDate={fetchedPost.user.createdAt}
                  userId={fetchedPost.user?.id}
                />
                <PostContent>{fetchedPost.content}</PostContent>
              </div>
            </section>

            {/*I put here the CommentsSection with edit delete buttons*/}
            {/*inefficient i think*/}
            {fetchedPost.comments.filter(comment => !comment.isDeleted).map(async (comment) => {
              const user = await prisma.user.findUnique({
                where: {
                  id: comment.authorId,
                },
              });
              return (
                <div key={comment.id}>
                  <div className="border border-x-2 border-b-2 border-olive flex p-4">

                    {currentUser?.id === comment.authorId &&
                      <EditDeleteComment postId={params.postId} subtopicId={params.subtopicId}
                        commentId={comment.id} />}
                    <UserProfile
                      author={user?.username || ''}
                      profileImageUrl={user?.profileImage || ''}
                      joinDate={user?.createdAt || new Date()}
                      userId={user?.id || ''}
                    />
                    <div className="post-content py-6 px-6 overflow-hidden flex flex-col w-full">
                      {comment.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </article>
          
        </div>
        <form action={formAction} method="POST">
          <div className="w-full flex flex-col p-5">
            <label htmlFor="post-content" className="text-2xl py-2 font-semibold">Comment</label>
            <div className="flex items-center w-full"> {/* Added w-full here */}

              <div className="flex-shrink-0 p-3">
                <UserProfile
                  author={currentUser?.username || ''}
                  profileImageUrl={currentUser?.profileImage || ''}
                  joinDate={currentUser?.createdAt || new Date()}
                  userId={currentUser?.id || ''}
                />
              </div>

              <div className="flex flex-col flex-grow ml-4">
                <textarea
                  className="bg-white appearance-none border-2 border-dim-gray rounded w-full h-48 text-gray-700 leading-tight focus:outline-none focus:border-burnt-sienna p-5"
                  name="content"
                  rows={10}
                  required
                  minLength={20}
                ></textarea>
              </div>
            </div>

            <div className="w-full flex justify-end mt-4">
              <button
                className="bg-olive hover:bg-olive-light text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}