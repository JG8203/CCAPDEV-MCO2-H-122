"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/app/lib/prisma";
import {redirect} from "next/navigation";

export async function formActionDelete(commentId : string) {
    const { getUser } = getKindeServerSession();
    const userObject = await getUser();
    const kindeId = userObject?.id;
    const comment = await prisma.comment.findUnique({
        where: {
            id: commentId,
        },
        include: {
            post: true,
        },
    });
    const user = comment && await prisma.user.findUnique({
        where: {
            id: comment.authorId,
        },
    });

    if (!comment || !user || user.kindeId !== kindeId) {
        return { notFound: true };
    }

    try {
        await prisma.comment.update({
            where: {
                id: commentId,
            },
            data: {
                isDeleted: true,
            },
        });
    } catch (error) {
        console.error('Failed to delete comment:', error);
    } finally {
        if (comment) {
            redirect(`/forum/subtopic/${comment.post.subtopicId}/post/${comment.postId}`);
        }
    }
}

export async function formActionDeletePost({ params }: { params: { postId: string, subtopicId: string } }) {
    const { getUser } = getKindeServerSession();
    const userObject = await getUser();
    const kindeId = userObject?.id;
    const post = await prisma.post.findUnique({
        where: {
            id: params.postId,
        },
        include: {
            user: true,
        },
    });

    if (!post || post.user.kindeId !== kindeId) {
        return { notFound: true };
    }
    const postId = params.postId;
    try {
        await prisma.post.update({
            where: {
                id: postId,
            },
            data: {
                isDeleted: true,
            },
        });
    } catch (error) {
        console.error('Failed to delete post:', error);
    } finally {
        const { subtopicId } = params;
        redirect(`/forum/subtopic/${subtopicId}`);
    }
}
