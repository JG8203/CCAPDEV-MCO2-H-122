"use client";
import { useState, FormEvent } from 'react'; // Ensure FormEvent is imported for typing the event in handleSubmit
import {formActionComment} from "@/app/api/serverActions";
import { MentionsInput, Mention } from "react-mentions";

interface Props {
    users: string[];
    subtopicId: string;
    postId: string;
}

export function CommentBox({ users, subtopicId, postId }: Props) {
    const [content, setContent] = useState<string>(''); // Explicitly define the state type

    const handleSubmit = async (e: FormEvent) => { // Use FormEvent for typing the event
        e.preventDefault();
        const formData = new FormData();
        formData.append('content', content);
        await formActionComment({ params: { subtopicId, postId, formData } });
    };

    return (
        <form onSubmit={handleSubmit} className="w-6/12">
            <label htmlFor="post-content" className="text-2xl py-2 font-semibold">Comment</label>
            <div className="flex items-center w-full">
                <MentionsInput value={content} onChange={(event, value) => setContent(value)}
                               className="resize-none bg-white appearance-none border-2 border-dim-gray rounded w-full h-48
                               text-gray-700 leading-tight focus:outline-none focus:border-burnt-sienna p-5">
                    <Mention
                        trigger="@"
                        data={users.map(user => ({ id: user, display: user }))}
                        renderSuggestion={(suggestion, search, highlightedDisplay, index, focused) => (
                            <div className={`user ${focused ? 'focused' : ''}`}>
                                <b>{highlightedDisplay}</b>
                            </div>
                        )}
                    />

                </MentionsInput>
            </div>
            <div className="flex justify-end mt-4">
                <button
                    className="bg-olive border-4 rounded-lg hover:border-double border-beige text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outline"
                    type="submit">
                    Create Comment
                </button>
            </div>
        </form>
    );
}