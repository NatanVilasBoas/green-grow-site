import styled from "styled-components";

const Card = styled.button`
    border: 1px solid var(--davys-gray);
    width: 340px;
    height: 500px;
    margin: 2vw;
    padding: 2vw;
    font-family: 'Poppins';
    box-sizing: content-box;
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
}

const CardProduct: React.FC<CardProductProps> = ({ titulo, valor, quant, img, desc }) => {
    return (
        <Card role="product">
            <img src={img} />
            <Title>{titulo}</Title>
            <Info>
                <p style={{fontWeight: 500}}>R${valor}</p>
                <p style={{fontWeight: 500}}>Quantidade: {quant}</p>
            </Info>
            <DescContainer>
                <p style={{fontSize:"16px"}}>Descrição:</p>
                <p>{desc}</p>
            </DescContainer>
        </Card>
    )
}

export default CardProduct;