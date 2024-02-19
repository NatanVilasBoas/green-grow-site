import styled from "styled-components";
import CardItemCart from "../../components/CardItemCart/CardItemCart";
import { useCarrinhoContext } from "../../context/Carrinho";


const Container = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Cart = () => {
    const {itens} = useCarrinhoContext();

    return(
        <Container>
            <h1>Seu carrinho</h1>
            {itens.map((item : Record<string, any>) => {
               return <CardItemCart key={item.id} titulo={item.id} valor={item.valor} quant={item.quant} img={item.img} desc={item.desc}/>
            })}
        </Container>
    )
}

export default Cart;