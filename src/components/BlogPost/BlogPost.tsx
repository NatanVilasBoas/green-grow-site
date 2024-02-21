import styled from "styled-components"

const Post = styled.div`
    display: flex;
    width: 60%;
    border: 1px solid black;
    margin: 2vh 2vw;
    height: 44vh;
`

const Info = styled.div`
    margin-left: 1vw;
`

const Image = styled.div`
    height: inherit;
    width: 12vw;
    background-image: url('https://placehold.co/400x350');
    background-repeat: no-repeat;
`

const BlogPost = () => {
    return (
        <Post role="post">
            <Image>
            </Image>
            <Info>
                <p>Titulo</p>
                <p>Breve texto</p>
                <div>
                    <p>Data</p>
                    <p>Tipo de post</p>
                </div>
            </Info>
        </Post>
    )
}

export default BlogPost;