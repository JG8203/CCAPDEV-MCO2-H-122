export interface Subtopic {
    _id: string;
    name: string;
    topicId: string;
    description?: string;
}

export interface Topic {
    _id: string;
    name: string;
    subtopics: Subtopic[];
}

export interface Comment {
    _id: string;
    content: string;
    authorId: string;
    date: string;
    editDate: string | null;
    deleted: boolean;
    upvotes: string[];
    downvotes: string[];
}

export interface Post {
    _id: string;
    title: string;
    content: string;
    authorId: string;
    date: string;
    editDate: string | null;
    upvotes: string[];
    downvotes: string[];
    status: string;
    comments: Comment[];
    subtopicId: string;
}

export interface User {
    _id: string;
    username: string;
    email: string;
    passwordHash: string;
    profilePicture: string;
    bio: string;
    createdAt: string;
    lastActive: string;
    roles: string[];
}