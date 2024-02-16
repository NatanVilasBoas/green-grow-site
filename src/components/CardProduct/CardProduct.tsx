import styled from "styled-components";

const Card = styled.button`
    border: 1px solid var(--davys-gray);
    width: 24vw;
    height: 40vh;
`

const Title = styled.p`
    font-size: 18px;
`

const Info = styled.div`
    display: flex;
    justify-content: space-around;
`

interface CardProductProps {
    titulo: string;
    valor: number;
    quant: number;
    img: string;
    desc: string;
}

const CardProduct: React.FC<CardProductProps> = ({ titulo, valor, quant, img, desc }) => {
    return (
        <Card role="product">
            <img src={img} />
            <Title>{titulo}</Title>
            <Info>
                <p>R${valor}</p>
                <p>{quant}</p>
            </Info>
            <p>Descrição:</p>
            <p>{desc}</p>
        </Card>
    )
}

export default CardProduct;