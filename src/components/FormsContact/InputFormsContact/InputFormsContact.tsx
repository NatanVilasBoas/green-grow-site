import styled from "styled-components";

const Container = styled.div`
    margin: 2vh 0;
`

const Label = styled.label`
    display: block;
    margin-bottom: 12px;
`

interface Props {
    titulo: string;
    text: boolean
}

const InputFormsContact : React.FC<Props> = ({titulo, text}) => {
    return (
        <Container>
            <Label htmlFor={titulo.toLocaleLowerCase()}>{titulo}</Label>
            {text ? <input type="text" id={titulo.toLocaleLowerCase()} name={titulo.toLocaleLowerCase()} required/> : <textarea name="mensagem" cols={36} rows={8}/>}
            
        </Container>
    )
}

export default InputFormsContact;