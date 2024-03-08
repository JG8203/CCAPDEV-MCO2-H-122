export default function CreatePost() {
    return (
        <div>
            <div className="text-4xl font-bold text-burnt-sienna p-5">
                Create Thread
            </div>
            <div className="flex flex-col p-5">
                <label className="text-2xl py-3 font-semibold" htmlFor="post-title">Title</label>
                <input className="bg-white appearance-none border-2 border-dim-gray rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-olive" id="post-title" type="text" placeholder="Where is Casper?" />
            </div>
            <div className="flex flex-col p-5">
                <label className="text-2xl py-3 font-semibold" htmlFor="post-title"></label>
                <textarea className="bg-white appearance-none border-2 border-dim-gray rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-olive" id="post-title" rows={20}></textarea>
            </div>
            <div className="w-full flex justify-end">
                <button className="bg-olive hover:bg-olive-light text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline m-5" type="button">
                    Create Post
                </button>
            </div>
        </div>
    );
}