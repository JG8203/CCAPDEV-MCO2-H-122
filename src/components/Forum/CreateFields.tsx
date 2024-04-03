"use client";

import React, { useState } from 'react';
import { MDXEditor, UndoRedo, BoldItalicUnderlineToggles, toolbarPlugin, imagePlugin, InsertImage } from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';

export default function CreateFields({defaultText}: {defaultText: string}) {
    const [markdown, setMarkdown] = useState(defaultText);
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
                <MDXEditor
                    markdown={markdown}
                    onChange={setMarkdown}
                    plugins={[
                        imagePlugin({
                            imageUploadHandler: async (image: File) => {
                              const formData = new FormData();
                              formData.append('file', image);
                              formData.append('upload_preset', 'post-image');
                              formData.append('cloud_name', 'dtm4om1g2');
                          
                              try {
                                const response = await fetch(`https://api.cloudinary.com/v1_1/dtm4om1g2/image/upload`, { // POST request to Cloudinary's upload endpoint
                                  method: 'POST',
                                  body: formData,
                                });
                                const data = await response.json();
                                console.log('Image uploaded:', data.secure_url);
                                return data.secure_url; // This is the URL of the uploaded image
                              } catch (error) {
                                console.error('Failed to upload image:', error);
                              }
                            }
                          }),
                        toolbarPlugin({
                            toolbarContents: () => (
                                <>
                                    <UndoRedo />
                                    <BoldItalicUnderlineToggles />
                                    <InsertImage />
                                </>
                            ),
                        }),
                    ]}
                />
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
    );
}
