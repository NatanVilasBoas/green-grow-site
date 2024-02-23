import { useParams } from 'react-router-dom';
import posts from '../../json/dbBlogPost.json'
import styled, { StyleSheetManager } from 'styled-components';


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
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'img'}>
            <section>
                <Image img={post?.img ? post.img : ''} />
                <h1>{post?.title}</h1>
            </section>
        </StyleSheetManager>
    )
}

export default PostBlog;