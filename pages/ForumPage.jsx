import React from 'react';
import ForumPosts from "./ForumPosts.jsx";

function ForumPage() {
    
    //temporary
    const posts = [
        { forumName: 'Discussions about the most notorious cat in the campus.', forumDesc: 'Met him noon sa CADS (not hensy!!) and kinalmot niya ako, went to the clinic a few days later',
    lastPostPic: '../public/images/catuser0.png', lastPostName: '[ADMIN] NO POSTING OF NANGANGALMOT INCIDENCES', lastPostAuthor : 'ADMIN#1', lastPostUpvotes : 2, lastPostDownvotes : 1 },

        // add here?
    ];

    return (
        <div className="bg-beige font-roboto text-base text-gray-800 align-center min-h-screen flex flex-col w-full">
            <NavBar/>
            <div className="flex justify-center w-full p-10">
                <div className="flex w-3/4 justify-between">
                    <ForumPosts posts={posts}/>
                </div>
            </div>
        </div>
    );
}

export default ForumPage;