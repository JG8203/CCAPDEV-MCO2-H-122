import React from 'react';
export default UserPosts;
//This is for the user's posts in the ProfilePage
function UserPosts({ posts }) {
    return (
        <div className="">
            <table className="basis-4/5 text-sm text-left text-gray-500 table-fixed overflow-ellipsis border-solid border-2 border-olive mb-20">
                <thead className="text-lg uppercase bg-olive text-beige">
                <tr>
                    <th scope="col" className="pt-3 pb-3 px-5">
                        Posts
                    </th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post, index) => (
                    <tr key={index} className="border-b-2 border-olive">
                        <td scope="row" className="p-2 font-medium text-gray-900 flex">
                            <div className="text-5xl p-5">
                                🐈
                            </div>
                            <div className="flex-col">
                                <div className="font-medium text-olive">
                                    {post.title}
                                </div>
                                <div className="font-small text-dim-gray font-normal">
                                    {post.content}
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

