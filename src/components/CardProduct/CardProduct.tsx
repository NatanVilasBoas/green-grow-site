import styled from "styled-components";
import { useCarrinhoContext } from "../../context/Carrinho";

import 'react-toastify/dist/ReactToastify.css';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: none;
    width: 430px;
    margin: 2vw;
    padding: 2vw;
    font-family: 'Poppins';
    box-sizing: content-box;
    border-radius: 12px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.1);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:hover{
        transform: translateY(-5px) scale(1.01);
        box-shadow: 10px 10px 10px rgba(0,0,0,0.1);
    }
`

const Title = styled.p`
    font-size: 24px;
    text-align: start;
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
`

const DescContainer = styled.div`
    text-align: left;
`

interface CardProductProps {
    titulo: string;
    valor: number;
    quant: number;
    img: string;
    desc: string;
    onAddToCart: () => void;
}



const CardProduct: React.FC<CardProductProps> = ({ titulo, valor, quant, img, desc, onAddToCart }) => {

    const { addItem } = useCarrinhoContext();

    const item = { id: titulo, valor, quant: 1, img, desc };

    const adicionarAoCarrinho = () => {
        addItem(item)
        onAddToCart()
    }

    return (
        <Card id={titulo} role="product">
            <img src={img} alt={titulo} />
            <Title>{titulo}</Title>
            <Info>
                <p style={{ fontWeight: 500 }}>R${valor}</p>
                <p style={{ fontWeight: 500 }}>Quantidade: {quant}</p>
            </Info>
            <DescContainer>
                <p style={{ fontSize: "16px" }}>Descrição:</p>
                <p>{desc}</p>
            </DescContainer>
            <div>
                <button onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</button>
            </div>
        </Card>
    )
}

export default CardProduct;