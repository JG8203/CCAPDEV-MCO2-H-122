import React from 'react';
export default UserProfile;
function UserProfile({ username, bio }) {
    return (
        <div className="bg-burnt-sienna rounded-lg shadow-lg p-4 flex flex-col items-center basis-1/5 ml-20">
            <div className="bg-beige h-48 w-48 rounded-lg mb-4"></div>
            <div className="text-center mb-4">
                <p className="text-white">{username}</p>
                <p className="text-wow-yellow">{bio}</p>
            </div>
            <button className="bg-wow-yellow text-white py-2 px-4 rounded-full mb-2 w-full">Set Profile</button>
            <button className="bg-wow-yellow text-white py-2 px-4 rounded-full w-full">New Post</button>
        </div>
    );
}


