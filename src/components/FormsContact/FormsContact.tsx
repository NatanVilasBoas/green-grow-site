import InputFormsContact from "./InputFormsContact/InputFormsContact";

const FormsContact = () => {
    return (
        <form data-testid="forms-contato">
            <InputFormsContact text titulo="Nome:" />
            <InputFormsContact text titulo="E-mail:" />
            <InputFormsContact text = {false} titulo="Mensagem:" />
            <button>Enviar e-mail</button>
        </form>
    )
}

export default FormsContact;