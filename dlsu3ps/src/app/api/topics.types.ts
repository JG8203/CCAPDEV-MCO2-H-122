export interface Subtopic {
    id: string;
    name: string;
    desc: string; // Assuming 'description' maps to 'desc' in the schema
    topicId: string;
}

export interface Topic {
    id: string;
    name: string;
    subtopics: Subtopic[];
}

export interface Comment {
    id: string;
    authorId: string;
    content: string;
    date: Date; // Changed string to Date for DateTime type
    postId: string; // Reference to the Post it belongs to
    // Removed fields not present in the given schema
}

export interface Post {
    id: string;
    authorId: string;
    content: string;
    date: Date;
    downvotes: string[];
    subtopicId: string;
    title: string;
    upvotes: string[];
    comments: Comment[]; 
}

export interface User {
    id: string;
    kindeId: string; // Unique identifier
    email: string;
    firstName: string;
    lastName: string;
    favoriteCat?: string; // Optional field for the user's favorite cat
    profileImage?: string; // Optional field for the user's profile image
    posts: Post[]; // Relationship to Posts
    createdAt: Date; // Changed string to Date for DateTime type
    // Removed fields not present in the given schema
}
