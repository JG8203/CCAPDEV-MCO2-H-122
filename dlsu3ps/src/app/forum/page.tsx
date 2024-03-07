import React from 'react';
import NavBar from '@/components/NavBar';
import TopicBox from '@/components/topics/TopicBox';
import {topics, posts, users} from '@/app/api/data';


export default function ForumPage() {

    //temporary
    const topics = [
        {
            "_id": "3a5cc8a0-5b31-4195-ba4c-60b4899a86f2",
            "name": "General Forums",
            "subtopics": [
                {
                    "_id": "ce309956-ad50-40e2-8e6c-545812c57ef9",
                    "name": "Subtopic 1",
                    "topicId": "3a5cc8a0-5b31-4195-ba4c-60b4899a86f2"
                },
                {
                    "_id": "02f05ebf-3c26-4501-a456-e97bd78a31c7",
                    "name": "Subtopic 2",
                    "topicId": "3a5cc8a0-5b31-4195-ba4c-60b4899a86f2"
                },
                {
                    "_id": "089b502b-012f-4f86-9992-df2f10e4916f",
                    "name": "Subtopic 3",
                    "topicId": "3a5cc8a0-5b31-4195-ba4c-60b4899a86f2"
                },
                {
                    "_id": "d65a5db6-2670-4315-9695-b7de5f5cbe0a",
                    "name": "Subtopic 4",
                    "topicId": "3a5cc8a0-5b31-4195-ba4c-60b4899a86f2"
                },
                {
                    "_id": "c6a1f607-664d-4d82-8e76-6980ff870f7c",
                    "name": "Subtopic 5",
                    "topicId": "3a5cc8a0-5b31-4195-ba4c-60b4899a86f2"
                }
            ]
        },
        {
            "_id": "3a5cc8a0-5b31-4195-ba4c-60b4899a86f2",
            "name": "General Forums",
            "subtopics": [
                {
                    "_id": "ce309956-ad50-40e2-8e6c-545812c57ef9",
                    "name": "Subtopic 1",
                    "topicId": "3a5cc8a0-5b31-4195-ba4c-60b4899a86f2"
                },
                {
                    "_id": "02f05ebf-3c26-4501-a456-e97bd78a31c7",
                    "name": "Subtopic 2",
                    "topicId": "3a5cc8a0-5b31-4195-ba4c-60b4899a86f2"
                },
                {
                    "_id": "089b502b-012f-4f86-9992-df2f10e4916f",
                    "name": "Subtopic 3",
                    "topicId": "3a5cc8a0-5b31-4195-ba4c-60b4899a86f2"
                },
                {
                    "_id": "d65a5db6-2670-4315-9695-b7de5f5cbe0a",
                    "name": "Subtopic 4",
                    "topicId": "3a5cc8a0-5b31-4195-ba4c-60b4899a86f2"
                },
                {
                    "_id": "c6a1f607-664d-4d82-8e76-6980ff870f7c",
                    "name": "Subtopic 5",
                    "topicId": "3a5cc8a0-5b31-4195-ba4c-60b4899a86f2"
                }
            ]
        }
    ];

    return (
        <div className="bg-beige font-roboto text-base text-gray-800 align-center min-h-screen flex flex-col w-full">
            <NavBar />
            <TopicBox />
        </div>
    );
}