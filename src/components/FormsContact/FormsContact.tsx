import { useState } from "react";
import InputFormsContact from "./InputFormsContact/InputFormsContact";

const FormsContact = () => {

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');

    const changeEmail = (value : string) => {
        setEmail(value);
    }
    const changeNome = (value : string) => {
        setNome(value);
    }

    return (
        <form data-testid="forms-contato">
            <InputFormsContact 
                onHandleChange={(value) => changeEmail(value)} 
                text 
                titulo="Nome:" />
            <InputFormsContact 
                onHandleChange={(value) => changeNome(value)} 
                text 
                titulo="E-mail:" />
            <InputFormsContact 
                text = {false} 
                titulo="Mensagem:" 
                isDisabled = {nome.length > 0 && email.length > 0 ? false : true} />
            <button disabled = {nome.length > 0 && email.length > 0 ? false : true}>Enviar e-mail</button>
        </form>
    )
}

export default FormsContact;