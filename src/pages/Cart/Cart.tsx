import styled from "styled-components";
import CardItemCart from "../../components/CardItemCart/CardItemCart";
import { useCarrinhoContext } from "../../context/Carrinho";


const Container = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Message = styled.p`
    width: 100%;
    font-size: 24px;
    margin: 25vh 0;
`

const Cart = () => {
    const {itens} = useCarrinhoContext();

    return(
        <Container>
            <h1>Seu carrinho</h1>
            {itens.length > 0 ? itens.map((item : Record<string, any>) => {
               return <CardItemCart key={item.id} titulo={item.titulo} valor={item.valor} quant={item.quant} img={item.img} desc={item.desc}/>
            }) : <Message>Não há itens no carrinho.</Message>}
        </Container>
    )
}

export default Cart;