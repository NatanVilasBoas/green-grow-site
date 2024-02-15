import { ReactNode } from "react";
import styled from "styled-components";

const Button = styled.button`
    width: 11em;
    height: 4em;
    margin-top: 2em;
    background-color: transparent;
    color: #4caf50;
    border: 1px solid #4caf50;
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover{
        background-color: #4caf50;
        color: #fdfbf8;
    }
`

interface CtaButtonProps {
    children: ReactNode; // Definindo children como ReactNode
}


const CtaButton : React.FC<CtaButtonProps> = ({ children }) => {
    return(
        <Button>
            {children}
        </Button>
    )
}

export default CtaButton;