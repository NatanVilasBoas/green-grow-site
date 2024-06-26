import { ReactNode } from "react";
import styled from "styled-components";

const Card = styled.div`
    background-color: #fdfbf8;
    color: #4b4b4b;
    padding: 1em;
    width: 25vw;
    margin: 0 8px;
    border:  1px solid transparent;
    border-radius: 12px;
    transition: border-color 0.3s ease-in-out, transform 0.3s ease-in-out;

    &:hover{
        border-color: #126024;
        z-index: 1;
        transform: translateX(12px);
    }
`

const Title = styled.h3`
    color: #8b4513;
    font-family: 'MontSerrat', sans-serif;
    font-size: 24px;
`

interface CardBeneficioProps {
    title: ReactNode;
    text: ReactNode;
}

const CardBeneficio : React.FC<CardBeneficioProps> = ({title, text}) => {
    return(
        <Card>
            <Title>{title}</Title>
            <p>{text}</p>
        </Card>
    )
}

export default CardBeneficio;