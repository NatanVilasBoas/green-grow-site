import styled from "styled-components";
import BlogPost from "../../components/BlogPost/BlogPost";
import posts from '../../json/dbBlogPost.json';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Blog = () => {
    return (
        <Container>
            {posts.map(post => {
                return <BlogPost 
                            key={post.id}
                            titulo={post.title}
                            desc={post.brevDesc}
                            data={post.date}
                            tipo={post.type}
                        />
            })}
        </Container>
    )
}

export default Blog;