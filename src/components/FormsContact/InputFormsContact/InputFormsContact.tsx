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
    text: boolean;
    onHandleChange?: (e: string) => void;
    isDisabled?: boolean;
}

const InputFormsContact : React.FC<Props> = ({titulo, text, onHandleChange, isDisabled}) => {
    return (
        <Container>
            <Label htmlFor={titulo.toLocaleLowerCase()}>{titulo}</Label>
            {text ? <input 
                        type="text" 
                        id={titulo.toLocaleLowerCase()} 
                        name={titulo.toLocaleLowerCase()} 
                        required onChange={(e) => onHandleChange && onHandleChange(e.target.value)}/> 
                : <textarea 
                    name={titulo.toLocaleLowerCase()} 
                    id={titulo.toLocaleLowerCase()} 
                    cols={36} 
                    rows={8} 
                    disabled = {isDisabled ? true : false}/>}
            
        </Container>
    )
}

export default InputFormsContact;