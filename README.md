# CCAPDEV-MCO2-H-122

To run, type:

npm i

npm run dev

# Deployment
```"use client";
import { useState } from 'react';
import {formActionComment} from "@/app/api/serverActions";
import { MentionsInput, Mention } from "react-mentions";

type Props = {
    users: string[],
    subtopicId: string,
    postId : string,
}
export  function CommentBox({users, subtopicId, postId} : Props) {
    const [content, setContent] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('content', content);
        await formActionComment({ params: { subtopicId, postId, formData } });
    }


    return (
        <form onSubmit={handleSubmit} className="w-6/12">

                <label htmlFor="post-content" className="text-2xl py-2 font-semibold">Comment</label>
                <div className="flex items-center w-full"> {/* Added w-full here */}

                    <div className="flex flex-col flex-grow ml-4">

                        <MentionsInput value={content} onChange={setContent}>
                            <Mention
                                trigger="@"
                                data={users}
                                renderSuggestion={(suggestion, search, highlightedDisplay, index, focused) => (
                                    <div className={`user ${focused ? 'focused' : ''}`}>
                                        {highlightedDisplay}
                                    </div>
                                )}
                            />
                            {/*<Mention*/}
                            {/*    trigger="#"*/}
                            {/*    data={tags}*/}
                            {/*    renderSuggestion={(suggestion, search, highlightedDisplay, index, focused) => (*/}
                            {/*        <div className={`tag ${focused ? 'focused' : ''}`}>*/}
                            {/*            {highlightedDisplay}*/}
                            {/*        </div>*/}
                            {/*    )}*/}
                            {/*/>*/}
                        </MentionsInput>
                    </div>
                </div>
                {/* Comment Section */}
                <main className=''>
                    <div className="flex flex-col p-5">
                        <label htmlFor="post-content" className="text-2xl py-2 font-semibold"></label>
                        <div className="flex items-center">

                            <div className="w-full flex justify-end mt-4 ">
                                <button
                                    className="bg-olive border-4 rounded-lg hover:border-double  border-beige text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outline"
                                    type="submit">
                                    Create Comment
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
        </form>
    );

}````
