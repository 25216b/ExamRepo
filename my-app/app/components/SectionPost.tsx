'use client'

import { useState } from 'react'
import { removePost, editPost } from '../../lib/tasks'

type Post = {
    id: string
    postTitle: string
    postContent: string
}

export default function SectionPost({ posts }: { posts: Post[] }) {
    const [editingId, setEditingId] = useState<string | null>(null)

    const handleEdit = async (formData: FormData) => {
        await editPost(formData)
        setEditingId(null)
    }

    return (
        <>
            {posts.map((post) => (
                <section 
                    key={post.id} 
                    className="relative max-w-[1000px] mx-auto p-[20px] my-[40px] bg-white rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
                >
                    <h2 className="text-2xl font-bold mb-4">{post.postTitle}</h2>
                    <p className="text-gray-700 whitespace-pre-wrap">{post.postContent}</p>
                    
                    <div className="absolute top-4 right-4 flex gap-2">
                        <button 
                            onClick={() => setEditingId(post.id)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition"
                            title="Edit"
                        >
                            ✏️
                        </button>
                        
                        <form action={removePost.bind(null, post.id)}>
                            <button 
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                                title="Delete"
                            >
                                🗑️
                            </button>
                        </form>
                    </div>

                    {/* Edit Form Popup */}
                    {editingId === post.id && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-gray-800 rounded-lg p-4 w-96 shadow-xl">
                                <form action={handleEdit} className="flex flex-col gap-3">
                                    <input type="hidden" name="id" value={post.id} />
                                    <input 
                                        type="text" 
                                        name="title"
                                        defaultValue={post.postTitle}
                                        placeholder="Title..."
                                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 outline-none"
                                        required
                                    />
                                    <textarea 
                                        name="content"
                                        defaultValue={post.postContent}
                                        placeholder="Content..."
                                        rows={4}
                                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 outline-none resize-none"
                                        required
                                    />
                                    <div className="flex gap-2">
                                        <button 
                                            type="submit"
                                            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2"
                                        >
                                            Save
                                        </button>
                                        <button 
                                            type="button"
                                            onClick={() => setEditingId(null)}
                                            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white rounded-lg py-2"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </section>
            ))}
        </>
    )
}