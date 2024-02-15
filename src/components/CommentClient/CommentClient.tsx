import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 36vw;
    heigth: 12vh;
    background-color: #FFFDF9;
    border: 1px solid #4b4b4b;
    border-radius: 24px;
    padding: 2em;
`

const Autor = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
`

const Nome = styled.p`
    font-weight: 500;
`

interface CommentClientProps {
    name: ReactNode;
    comment: ReactNode;
}

const CommentClient: React.FC<CommentClientProps> = ({ name, comment }) => {
    return (
        <Container>
            <Autor>
                <img width="50px" height="50px" src="/assets/avatar.png" />
                <Nome>{name}</Nome>
            </Autor>
            <p>{comment}</p>
        </Container>
    )
}

export default CommentClient;