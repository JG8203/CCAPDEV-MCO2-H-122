import React from 'react';
import prisma from '../lib/prisma';
import TopicBox from '@/components/Topics/TopicBox'

const getTopicsAndSubtopics = async () => {
    try {
        const topics = await prisma.topic.findMany({
            include: {
                subtopics: true
            }
        });
        return topics;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default async function ForumPage() {
  const topics = await getTopicsAndSubtopics()

  return (
    <div className="bg-beige font-roboto text-base text-gray-800 align-center min-h-screen flex flex-col w-full">
      {topics.length === 0 ? (
        <p className="flex justify-center items-center h-full text-red-600">No topics found. Please contact the Forum Administrator.</p>
      ) : (
        topics.map(topic => (
          <TopicBox key={topic.id} topic={topic} />
        ))
      )}
    </div>
  );
}
