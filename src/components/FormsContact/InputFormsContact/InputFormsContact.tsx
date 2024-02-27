import styled from "styled-components";

const Container = styled.div`
    margin: 2vh 0;
`

const Label = styled.label`
    display: block;
    margin-bottom: 12px;
`

const Input = styled.input`
    width: 100%;
    padding: .8rem;
    font-size: 16px;
    border: 1px solid;
    border-color: var(--russet);
    border-radius: 12px;

    &:focus{
        outline: none;
        border: 2px solid;
        border-color: var(--pigment-green);
    }
`

const TextArea = styled.textarea`
    width: 100%;
    padding: .8rem;
    font-size: 16px;
    border: 1px solid;
    border-color: var(--russet);
    border-radius: 12px;

    &:focus{
        outline: none;
        border: 2px solid var(--pigment-green);
    }
`

interface Props {
    titulo: string;
    text: boolean;
    onHandleChange?: (e: string) => void;
    isDisabled?: boolean;
}

const InputFormsContact : React.FC<Props> = ({titulo, text, onHandleChange, isDisabled}) => {
    return (
        <Container>
            <Label htmlFor={titulo.toLocaleLowerCase()}>{titulo}</Label>
            {text ? <Input 
                        type="text" 
                        id={titulo.toLocaleLowerCase()} 
                        name={titulo.toLocaleLowerCase()} 
                        required onChange={(e) => onHandleChange && onHandleChange(e.target.value)}/> 
                : <TextArea 
                    name={titulo.toLocaleLowerCase()} 
                    id={titulo.toLocaleLowerCase()}
                    rows={8} 
                    disabled = {isDisabled ? true : false}/>}
            
        </Container>
    )
}

export default InputFormsContact;