import { getPost } from '../../lib/tasks'
import SectionPost from './SectionPost'

export default async function SectionPostWrapper() {
    const posts = await getPost()
    return <SectionPost posts={posts} />
}