import styled from "styled-components";
import BlogPost from "../../components/BlogPost/BlogPost";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Blog = () => {
    return (
        <Container>
            <BlogPost />
            <BlogPost />
        </Container>
    )
}

export default Blog;