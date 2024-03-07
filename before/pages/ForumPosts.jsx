export default ForumPosts;

function ForumPosts({ posts }) {
    return (
        <div className="" >
            <div className="flex flex-col justify-center items-center p-5">
                <div className="overflow-x-auto flex-col">
                    <div className="mb-5 flex flex-row items-center justify-between">
                        <span className="text-5xl font-bold text-burnt-sienna">Top 5 Cattos</span>
                        <div className="flex">
                            <form action="search.html" method="GET">//
                                <button type="submit"
                                    className="mx-2 bg-burnt-sienna p-3 rounded-md font-semibold text-white">Search</button>
                            </form>
                        </div>
                    </div>
                    <table
                        className="w-full text-sm text-left text-gray-500 table-auto overflow-ellipsis border-solid border-2 border-olive mb-20">
                        <thead className="text-xs uppercase bg-olive text-beige">
                            <tr>
                                <th scope="col" className="pt-5 pb-3 px-6">
                                    Forum
                                </th>
                                <th scope="col" className="pt-5 pb-3 px-6">
                                    Latest Post
                                </th>
                                <th scope="col" className="pt-5 pb-3 px-6">
                                    Threads
                                </th>
                                <th scope="col" className="pt-5 pb-3 px-6">
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
                                                {post.forumName}
                                            </div>
                                            <div className="font-small text-dim-gray font-normal">
                                                {post.forumDesc}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 overflow-hidden overflow-ellipsis">
                                        <div className="flex items-center no-underline text-gray-900">
                                            <div className="w-10 h-10 bg-whitesmoke rounded-full border border-transparent mx-4 flex-shrink-0 overflow-hidden">
                                                <img src={post.lastPostPic} />
                                            </div>
                                            <div className="flex-col">
                                                <div className="font-semibold text-olive">
                                                    {post.lastPostName}
                                                </div>
                                                <div className="font-semi text-burnt-sienna">
                                                    {post.lastPostAuthor}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-4 px-6">
                                        {post.lastPostUpvotes}
                                    </td>
                                    <td class="py-4 px-6">
                                        {post.lastPostDOwnvotes}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mb-5">
                        <span className="text-5xl font-bold text-burnt-sienna">General Topics</span>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 table-auto overflow-clip border-solid border-2 border-olive">
                        <thead className="text-xs uppercase bg-olive text-beige">
                            <tr>
                                <th scope="col" className="pt-5 pb-3 px-6">
                                    Forum
                                </th>
                                <th scope="col" className="pt-5 pb-3 px-6">
                                    Latest Post
                                </th>
                                <th scope="col" className="pt-5 pb-3 px-6">
                                    Threads
                                </th>
                                <th scope="col" className="pt-5 pb-3 px-6">
                                    Posts
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post, index) => (
                                <tr key={index} className="border-b-2 border-olive">
                                    <td scope="row" className="p-3 font-medium text-gray-900 flex">
                                        <div className="text-3xl p-5">
                                            🐈
                                        </div>
                                        <div className="flex-col">
                                            <div className="font-medium text-olive">
                                                {post.forumName}
                                            </div>
                                            <div className="font-small text-dim-gray font-normal">
                                                {post.forumDesc}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 overflow-hidden overflow-ellipsis">
                                        <div className="flex">
                                            <div className="w-10 h-10 bg-whitesmoke rounded-full border border-transparent mx-4 flex-shrink-0 overflow-hidden">
                                                <img src={post.lastPostPic} />
                                            </div>
                                            <div className="flex-col">
                                                <div className="font-semibold text-olive">
                                                    {post.lastPostName}
                                                </div>
                                                <div className="font-semi text-burnt-sienna">
                                                    {post.lastPostAuthor}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-4 px-6">
                                        {post.lastPostUpvotes}
                                    </td>
                                    <td class="py-4 px-6">
                                        {post.lastPostDOwnvotes}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

