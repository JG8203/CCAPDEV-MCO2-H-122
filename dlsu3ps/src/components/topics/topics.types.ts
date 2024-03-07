export interface Subtopic {
    _id: string;
    name: string;
    topicId: string;
}

export interface Topic {
    _id: string;
    name: string;
    subtopics: Subtopic[];
}