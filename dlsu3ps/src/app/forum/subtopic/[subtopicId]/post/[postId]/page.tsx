import PostHeader from '@/components/ForumPost/PostHeader';
import UserProfile from '@/components/ForumPost/UserProfile';
import PostContent from '@/components/ForumPost/PostContent';
import Vote from '@/components/ForumPost/VotePost';
import prisma from '@/app/lib/prisma';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import EditDelete from '@/components/ForumPost/EditDelete';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import EditDeleteComment from "@/components/ForumPost/EditDeleteComment";
import { TimeAgo } from "@/components/ForumPost/TimeAgo";
import VoteComment from "@/components/ForumPost/VoteComment";
import {CommentBox} from "@/components/ForumPost/CommentBox";
import {Post} from "@prisma/client";

async function getPost(postId: string) {
  const post = await prisma.post.findUnique({
    where: { id: postId },
    include: {
      user: true, // This includes the user of the post
      comments: {
        include: {user : true}
      }      }
  });
  if (!post) {
    return null;
  }
  return post;
}

export default async function Page({ params }: { params: { subtopicId: string, postId: string } }) {
  const { getUser } = getKindeServerSession();
  const userObject = await getUser();
  let currentUser: { id: string; kindeId: string; email: string; firstName: string; lastName: string; favoriteCat: string | null; profileImage: string | null; createdAt: Date; username: string; bio: string | null; } | null = null; // Declare currentUser outside try block to use it throughout the component
  try {
    currentUser = await prisma.user.findUnique({
      where: {
        kindeId: userObject?.id,
      },
    });
  } catch (error) {
    console.error("Error retrieving user object:", error);
  }

  const fetchedPost = await getPost(params.postId);
  let usersList = fetchedPost?.comments.map(comment => comment.user) || [];
  let usernamesList = Array.from(new Set(usersList.map(user => user.username)));
  usernamesList = usernamesList.filter(username => username !== currentUser?.username);

  console.log(usernamesList);

  if (!fetchedPost || fetchedPost.isDeleted) {
    return notFound();
  }

  const profileImageUrl = fetchedPost.user?.profileImage || '';

  return (
    <main className="flex flex-col justify-center items-center p-9">
      <div className='rounded-md w-11/12'>
        <div className='px-2 py-2 flex justify-between'>
          {userObject && <Vote postId={params.postId} subtopicId={params.subtopicId} />}
          <article className="overflow-x-auto flex-col w-11/12">
            <section className="text-sm text-left text-gray-500 overflow-ellipsis border-x-2 border-olive">
              <PostHeader title={fetchedPost.title} />
              {currentUser?.id === fetchedPost.user.id && <EditDelete postId={params.postId} subtopicId={params.subtopicId} />}
              <div className="border-b-2 border-olive flex p-3" >
                <UserProfile
                  author={fetchedPost.user?.username}
                  profileImageUrl={profileImageUrl}
                  joinDate={fetchedPost.user.createdAt}
                  userId={fetchedPost.user?.id}
                />

                <PostContent date={fetchedPost.date}>{fetchedPost.content}</PostContent>

              </div>
            </section>

            {fetchedPost.comments.filter(comment => comment).map(async (comment) => {
              const user = await prisma.user.findUnique({
                where: {
                  id: comment.authorId,
                },
              });
              return (
                  <div key={comment.id}>
                    {!comment.isDeleted ? (
                      
                        <div className="border border-x-2 border-b-2 border-olive flex p-4">
                          <VoteComment postId={params.postId} commentId={comment.id} />
                          <div className="flex-row">
                            <UserProfile
                                author={user?.username || ''}
                                profileImageUrl={user?.profileImage || ''}
                                joinDate={user?.createdAt || new Date()}
                                userId={user?.id || ''}
                            />
                            <div className="font-light italic mt-3">
                              {TimeAgo(comment.date)}
                            </div>
                          </div>
                          <div className="post-content py-6 px-6 overflow-hidden block w-full">
                            {comment.content.split(' ').map((word, index) => {
                              if (word.startsWith('@[')) {
                                const username = word.slice(2, word.indexOf(']'));
                                const user = usersList.find(user => user.username === username);
                                return user ? <span key={index}><b><Link href={`/profile/${user.id}`}>@{username} </Link></b></span> : word + ' ';
                              } else {
                                return word + ' ';
                              }
                            })}
                          </div>

                          {currentUser?.id === comment.authorId &&
                              <EditDeleteComment postId={params.postId} subtopicId={params.subtopicId}
                                                 commentId={comment.id} content={comment.content}/>}
                        </div>
                    ) : (
                        <div className="border border-x-2 border-b-2 border-olive flex p-4">
                          <div className="post-content py-6 px-6 overflow-hidden flex flex-col w-full items-center">
                            This comment has been deleted.
                          </div>
                        </div>
                    )}
                  </div>
              );

            })}
          </article >
        </div >
      </div >

      {userObject && (<div className="flex w-6/12">
        <div className="w-full flex p-5">
          <div className="flex-shrink-0 p-3">
            <UserProfile
                author={currentUser?.username || ''}
                profileImageUrl={currentUser?.profileImage || ''}
                joinDate={currentUser?.createdAt || new Date()}
                userId={currentUser?.id || ''}
            />
          </div>
          <CommentBox postId={params.postId} subtopicId={params.subtopicId} users={usernamesList}/>
        </div>
      </div>)}
    </main>
  );
}
