import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const Container = styled.div`
    padding: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
`

const SearchInput = styled.input`
    width: 80%;
    border-radius: 12px;
    padding: .8vw;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Poppins';
    border: 1px solid var(--russet);

    @media(max-width: 800px){
        font-size: 12px;
    }

    &:focus{
        outline: none;
        border: 2px solid var(--pigment-green);
    }
`

interface SearchBarProps{
    filter: (value : string) => void;
    valorBusca: string;
}

const SearchBar : React.FC<SearchBarProps>= ({filter, valorBusca}) => {
    return(
            <Container>
                <IoSearch size={20}/>
                <SearchInput value={valorBusca} onChange={e => filter(e.target.value)} type="text" placeholder="Busque por um produto"/>
            </Container>
    )
}

export default SearchBar;