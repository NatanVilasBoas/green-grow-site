import styled from "styled-components";

const Container = styled.div`
    padding: 2vw;
    display: flex;
    justify-content: center;
`

const SearchInput = styled.input`
    width: 80%;
    border-radius: 12px 0 0 12px;
    padding: .8vw;
    box-sizing: border-box;
`

const SearchButton = styled.button`
    border-radius: 0 12px 12px 0;
`

const SearchBar = () => {
    return(
            <Container>
                <SearchInput type="text" placeholder="Busque por um produto"/>
                <SearchButton>Pesquisar</SearchButton>
            </Container>
    )
}

export default SearchBar;