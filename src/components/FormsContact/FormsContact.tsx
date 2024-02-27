import { useState } from "react";
import InputFormsContact from "./InputFormsContact/InputFormsContact";
import styled from "styled-components";

const Button = styled.button`
    padding: 1.2rem 3rem;
    margin-top: 16px;
    background-color: transparent;
    border: 1px solid var(--russet);
    cursor: pointer;
    color: var(--davys-gray);
    border-radius: 12px;
    font-size: 14px;
    transition: border-color ease-in-out 0.3s, background-color ease-in-out 0.3s, color ease-in-out 0.3s;

    &:hover{
        border-color: var(--pigment-green);
        background-color: var(--pigment-green);
        color: var(--baby-powder);
    }

    &:disabled{
        cursor: not-allowed;
        background-color: transparent;
        border: 1px solid var(--russet);
        color: var(--davys-gray);
    }
`

const FormsContact = () => {

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');

    const changeEmail = (value: string) => {
        setEmail(value);
    }
    const changeNome = (value: string) => {
        setNome(value);
    }

    return (
            <form style={{width: "100%"}} data-testid="forms-contato">
                <InputFormsContact
                    onHandleChange={(value) => changeEmail(value)}
                    text
                    titulo="Nome:" />
                <InputFormsContact
                    onHandleChange={(value) => changeNome(value)}
                    text
                    titulo="E-mail:" />
                <InputFormsContact
                    text={false}
                    titulo="Mensagem:"
                    isDisabled={nome.length > 0 && email.length > 0 ? false : true} />
                <Button disabled={nome.length > 0 && email.length > 0 ? false : true}>Enviar e-mail</Button>
            </form>
    )
}

export default FormsContact;