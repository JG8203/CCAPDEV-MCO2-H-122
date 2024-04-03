"use client";
import { formActionDeletePost } from "@/app/api/serverActions";

type Props = {
    title: string,
    children: React.ReactNode,
    postId: string,
    subtopicId: string,
    onClose: () => void,
}
export default function DialogPost({title, children, postId, subtopicId, onClose} : Props){
    async function handleDelete() {
        await formActionDeletePost({ params: { postId: postId, subtopicId: subtopicId } });
        onClose();
    }

    return (
        <>
            <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
            <div className="fixed inset-0 flex items-center justify-center z-20">
                <dialog open className="rounded-xl backdrop-filter backdrop-blur-sm bg-opacity-50">
                    <div className="w-96 max-w-full bg-gray-200 rounded-xl flex flex-col">
                        <div className="flex items-center justify-between px-5 pt-4 bg-yellow-400">
                            <h1 className="text-2xl">{title}</h1>
                        </div>
                        <div className="p-5">
                            {children}
                        </div>
                        <div className="flex justify-end px-5 pb-6">
                            <button onClick={onClose}
                                    className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400">No
                            </button>
                            <button onClick={handleDelete}
                                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Yes
                            </button>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    )
}