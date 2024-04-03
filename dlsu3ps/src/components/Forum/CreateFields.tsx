"use client";

import React, { useState } from 'react'
import EditorComponent from '../EditorComponent'

export default function CreateFields({defaultText} : {defaultText: string}) {
    const [markdown, setMarkdown] = useState(defaultText);
    const handleMarkdownChange = (newMarkdown:string) => {
        setMarkdown(newMarkdown);
      };
    return (
        <>
            <div className="text-4xl font-bold text-burnt-sienna p-5">
                Create Thread
            </div>
            <div className="flex flex-col p-5">
                <label htmlFor="post-title" className="text-2xl py-3 font-semibold">Title</label>
                <input
                    className="bg-white appearance-none border-2 border-dim-gray rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-burnt-sienna"
                    name="title"
                    type="title"
                    placeholder="Where is Casper?"
                    required
                    minLength={5}
                />
            </div>
            <div className="flex flex-col p-5">
                <label htmlFor="post-content" className="text-2xl py-3 font-semibold">Content</label>
                <EditorComponent markdown={defaultText} onChange={handleMarkdownChange} />
                <input
                    type="hidden"
                    name="content"
                    value={markdown}
                    minLength={20}
                />
            </div>
            <div className="w-full flex justify-end">
                <button
                    className="bg-olive hover:bg-olive-light text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline m-5"
                    type="submit"
                >
                    Create Post
                </button>
            </div>
        </>
    )
}
