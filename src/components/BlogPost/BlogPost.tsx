import styled from "styled-components"

const Info = styled.div`
    margin-left: 1vw;
    width: 98vw;
    padding: 1vw;
`

const Image = styled.div<{ img: string }>`
    height: inherit;
    width: 32vw;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const Title = styled.p`
    font-size: 24px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
`

const Desc = styled.p`
    padding: 1rem;
`

const Footer = styled.div`
    display: flex;
    padding-top: 3rem;
    gap: 2rem;
    font-size: 14px;

    @media(max-width: 800px){
        padding-top: 0;
    }
`

const Post = styled.div`
    display: flex;
    width: 88vw;
    border: 1px solid black;
    margin: 2vh 2vw;
    cursor: pointer;

    @media(max-width: 800px){

        ${Title}{
            font-size: 16px;
        }

        ${Desc}{
            font-size: 14px;
            padding: 12px;
        }

        ${Footer}{
            font-size: 12px;
        }
    }
`



interface Props {
    titulo: string;
    desc: string;
    data: string;
    tipo: string;
    img: string;
    onHandleNavigate: () => void;
}

const BlogPost = ({ titulo, desc, data, tipo, img, onHandleNavigate }: Props) => {
    return (
        <Post onClick={onHandleNavigate} role="post">
            <Image img={img}>
            </Image>
            <Info>
                <Title>{titulo}</Title>
                <Desc>{desc}</Desc>
                <Footer>
                    <p>{data}</p>
                    <p>{tipo}</p>
                </Footer>
            </Info>
        </Post>
    )
}

export default BlogPost;