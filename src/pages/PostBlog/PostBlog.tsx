import { useParams } from 'react-router-dom';
import posts from '../../json/dbBlogPost.json'


const PostBlog = () => {

    const { id } = useParams();
    const postId = id ? parseInt(id) : undefined; 
    const post = postId !== undefined ? posts.find(post => post.id === postId) : null;

    return(
            <section>
                <p>{post?.brevDesc}</p>
            </section>
    )
}

export default PostBlog;