import styled from "styled-components";
import CardItemCart from "../../components/CardItemCart/CardItemCart";
import { useCarrinhoContext } from "../../context/Carrinho";


const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Message = styled.p`
    width: 100%;
    font-size: 24px;
    margin: 25vh 0;
    text-align: center;
`

const ClearButton = styled.button`
    margin: 2em;
    width: 25vw;
    height: 6vh;
    font-size: 16px;
    box-sizing: content-box;
    background-color: transparent;
    border: 1px solid var(--red-dark);
    border-radius: 12px;
    color: var(--red-dark);
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover{
        background-color: var(--red-dark);
        color: var(--baby-powder);
    }

    &:disabled {
        background-color: transparent;
        color: gray;
        border-color: gray;
        cursor: not-allowed;
        pointer-events: none;
    }

    @media(max-width: 800px){
        font-size: 12px;
    }
`

const Cart = () => {
    const {itens, clearCart} = useCarrinhoContext();

    const esvaziaCarrinho = () => {
        clearCart();
    }

    return(
        <Container>
            <h1>Seu carrinho</h1>
            {itens.length > 0 ? itens.map((item : Record<string, any>) => {
               return <CardItemCart key={item.id} titulo={item.titulo} valor={item.valor} quant={item.quant} img={item.img} desc={item.desc}/>
            }) : <Message>Não há itens no carrinho.</Message>}
            <ClearButton onClick={esvaziaCarrinho} disabled={itens.length > 0 ? false : true } >Esvaziar Carrinho</ClearButton>
            
        </Container>
    )
}

export default Cart;