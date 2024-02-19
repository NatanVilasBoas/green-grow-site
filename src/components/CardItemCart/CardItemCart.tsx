import styled from "styled-components";

const Card = styled.div`
    display: flex;
    align-itens: center;
    border: none;
    margin: 2vw;
    padding: 1vw;
    font-family: 'Poppins';
    box-sizing: content-box;
    border-radius: 12px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.1);
`

const Title = styled.p`
    font-size: 24px;
    text-align: start;
`

const Info = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 16px;
    align-items: center;
`

interface CardItemCartProps {
    titulo: string;
    valor: number;
    quant: number;
    img: string;
    desc: string;
}


const CardItemCart: React.FC<CardItemCartProps> = ({ titulo, valor, quant, img, desc }) => {

    return (
        <Card id={titulo} role="product">
            <img src={img} alt={titulo} />
            <div style={{margin: '1vw'}}>
                <Info>
                    <Title>{titulo}</Title>
                    <p style={{ fontWeight: 500, fontSize:'20px' }}>R${valor}</p>
                    <p style={{ fontWeight: 500, fontSize:'20px'  }}>Quantidade: {quant}</p>
                </Info>
                <div>
                    <p>Descrição:</p>
                    <p>{desc}</p>
                </div>
            </div>
        </Card>
    )
}

export default CardItemCart;