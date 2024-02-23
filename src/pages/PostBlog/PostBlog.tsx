import { useParams } from 'react-router-dom';
import posts from '../../json/dbBlogPost.json'
import styled from 'styled-components';


const Image = styled.div<{ img: string }>`
    width: 100%;
    height: 44vh;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const PostBlog = () => {

    const { id } = useParams();
    const postId = id ? parseInt(id) : undefined;
    const post = postId !== undefined ? posts.find(post => post.id === postId) : null;

    return (
        <section>
            <Image img={ post?.img ? post.img : ''} />
            <p>{post?.brevDesc}</p>
        </section>
    )
}

export default PostBlog;