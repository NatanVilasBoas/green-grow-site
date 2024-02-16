import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 36vw;
    heigth: 12vh;
    padding: 2em;
    margin: 1.1em;
    background: rgba(255, 255, 255, 0.07);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--pigment-green);
`

const Autor = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const Nome = styled.p`
    font-weight: 500;
    color: var(--russet);
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
            </Autor>
            <Nome>{name}</Nome>
            <p>{comment}</p>
        </Container>
    )
}

export default CommentClient;