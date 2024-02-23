import styled, { StyleSheetManager } from "styled-components";
import BlogPost from "../../components/BlogPost/BlogPost";
import posts from '../../json/dbBlogPost.json';
import { useNavigate } from "react-router-dom";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Blog = () => {

    const navigate = useNavigate();

    const navigateFor = (post: typeof posts[0]) => {
        navigate(`/blog/${post.id}`);
    }

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'img'}>
            <Container>
                {posts.map(post => {
                    return <BlogPost
                        key={post.id}
                        titulo={post.title}
                        desc={post.brevDesc}
                        data={post.date}
                        tipo={post.type}
                        img={post.img}
                        onHandleNavigate={() => navigateFor(post)}
                    />
                })}
            </Container>
        </StyleSheetManager>
    )
}

export default Blog;