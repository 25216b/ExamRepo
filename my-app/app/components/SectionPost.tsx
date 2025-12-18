import { getPost, editPost, removePost } from '../../lib/tasks'

export default async function SectionPost() {
    const posts = await getPost()
    
    return (
        <>
            {posts.map((post) => (
                <section 
                    key={post.id} 
                    className="relative max-w-[1000px] mx-auto p-[20px] my-[40px] bg-white rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
                >
                    <form action={editPost}>
                        <input type="hidden" name="id" value={post.id} />
                        
                        <input 
                            name="title" 
                            defaultValue={post.postTitle} 
                            className="w-full text-2xl font-bold mb-4 border px-2 py-1 rounded"
                        />
                        
                        <textarea 
                            name="content" 
                            defaultValue={post.postContent} 
                            rows={8} 
                            className="w-full border px-2 py-1 mb-4 rounded"
                        />
                        
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                            💾 Save
                        </button>
                    </form>
                    
                    <form action={removePost.bind(null, post.id)} className="inline">
                        <button className="bg-red-500 text-white px-4 py-2 rounded">
                            🗑️ Delete
                        </button>
                    </form>
                </section>
            ))}
        </>
    )
}