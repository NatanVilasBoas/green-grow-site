import { useParams } from 'react-router-dom';
import posts from '../../json/dbBlogPost.json'
import styled, { StyleSheetManager } from 'styled-components';
import ReactMarkdown from 'react-markdown';


const Image = styled.div<{ img: string }>`
    width: 100%;
    height: 44vh;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-bottom: 4px solid rgb(1, 91, 22);
`

const PostBlog = () => {

    const { id } = useParams();
    const postId = id ? parseInt(id) : undefined;
    const post = postId !== undefined ? posts.find(post => post.id === postId) : null;

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'img'}>
            <section>
                <Image img={post?.img ? post.img : ''} />
                <h1 style={{padding:'2vw'}}>{post?.title}</h1>
                <div style={{padding:'2vh 4vw', fontSize:'18px'}}><ReactMarkdown>{post?.text}</ReactMarkdown></div>
            </section>
        </StyleSheetManager>
    )
}

export default PostBlog;