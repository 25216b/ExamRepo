import { getPost } from '../../lib/tasks'

export default async function SectionPost() {
    const posts = await getPost()
    
    return (
        <>
            {posts.map((post) => (
                <section 
                    key={post.id} 
                    className="max-w-[1000px] mx-auto p-[20px] my-[40px] bg-white rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
                >
                    <h2 className="text-2xl font-bold mb-4">{post.postTitle}</h2>
                    <p className="text-gray-700 whitespace-pre-wrap">{post.postContent}</p>
                </section>
            ))}
        </>
    )
}