import styled from "styled-components";

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: none;
    margin: 2vw;
    padding: 1vw;
    font-family: 'Poppins';
    box-sizing: border-box;
    border-radius: 12px;
    box-shadow: 5px 5px 12px 3px rgba(0,0,0,0.1);
    width: 95%;
`

const Title = styled.p`
    font-size: 24px;
`

const Info = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    align-items: center;

    @media(max-width: 800px){
        font-size: 12px;
        flex-direction: column;
        text-align: center;

        ${Title}{
            font-size: 16px;
        }
    }
`

const DescContainer = styled.div`
    text-align: start;

    @media(max-width: 800px){
        display: none;
    }
`

const Image = styled.img`
    @media(max-width: 800px){
        width: 150px;
    }
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
        <Card id={titulo} role="item">
            <Image src={img} alt={titulo} />
            <div style={{margin: '1vw'}}>
                <Info>
                    <Title>{titulo}</Title>
                    <p style={{fontWeight: "500"}}>R${valor}</p>
                    <p style={{fontWeight: "500"}}>Quantidade: {quant}</p>
                </Info>
                <DescContainer>
                    <p>Descrição:</p>
                    <p>{desc}</p>
                </DescContainer>
            </div>
        </Card>
    )
}

export default CardItemCart;