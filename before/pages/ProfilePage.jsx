import React from 'react';
import NavBar from './NavBar';
import UserProfile from './UserProfile';
import UserPosts from "./UserPosts.jsx";

function ProfilePage() {
    const user = { username: 'example', bio: 'I love cats!' };
    //temporary
    const posts = [
        { title: 'I miss snowflake', content: 'Met him noon sa CADS (not hensy!!) and kinalmot niya ako, went to the clinic a few days later' },

        // add here?
    ];

    return (
        <div className="bg-beige font-roboto text-base text-gray-800 align-center min-h-screen flex flex-col w-full">
            <NavBar/>
            <div className="flex justify-center w-full p-10">
                <div className="flex w-3/4 justify-between">
                    <UserPosts posts={posts}/>
                    <UserProfile username={user.username} bio={user.bio}/>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
