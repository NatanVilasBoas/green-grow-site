import { useEffect } from "react";
import CtaButton from "../../components/CtaButton/CtaButton";
import styled from "styled-components";
import CardBeneficio from "../../components/CardBeneficio/CardBeneficio";
import CommentClient from "../../components/CommentClient/CommentClient";


const Container = styled.div`
`

const Beneficios = styled.section`
    display: flex;
    margin: 2vh 2vw;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Section = styled.div`
    padding: 8vh 4vw;
`

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Title = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
`

const PlantaImage = styled.img`
    border-radius: 24px;
    width: 800px;
    `

const Initial = () => {
    useEffect(() => {
        document.title = 'Inicial';
    })
    return (
        <Container>
            <Section>
                <h1>Bem-vindo à GreenGrow - Transformando a Agricultura Urbana</h1>
                <p>Seja bem-vindo à GreenGrow, sua fonte líder em soluções de agricultura urbana sustentável. Oferecemos uma variedade de produtos inovadores para ajudar você a cultivar alimentos frescos e saudáveis em seu próprio espaço urbano, de maneira fácil, sustentável e acessível.</p>
            </Section>

            <Section>
                <Title>Por que escolher a GreenGrow?</Title>
                <Beneficios role="group-beneficios">
                    <CardBeneficio
                        title="Produtos de Qualidade"
                        text="Nossos sistemas de cultivo vertical, compostagem doméstica e muito mais são projetados com os mais altos padrões de qualidade, garantindo resultados excepcionais." />
                    <CardBeneficio
                        title="Sustentabilidade"
                        text="Estamos comprometidos com práticas agrícolas sustentáveis que beneficiam o meio ambiente e promovem comunidades mais saudáveis e resilientes." />
                    <CardBeneficio
                        title="Facilidade de Uso"
                        text="Nossos produtos são projetados pensando na facilidade de uso e são perfeitos para iniciantes e entusiastas experientes da jardinagem." />
                </Beneficios>
                <CtaButton>Explore nossos produtos</CtaButton>
            </Section>
            <Section style={{backgroundColor:"var(--dartmouth-green)"}}>
                <Title style={{color:"var(--baby-powder)"}}>O que é a agricultura urbana sustentável?</Title>
                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "34px"}}>
                        <p style={{color:"var(--baby-powder)"}}>É uma prática que envolve o cultivo de alimentos, plantas e outros produtos agrícolas em ambientes urbanos de maneira ecologicamente equilibrada, socialmente justa e economicamente viável. Ela busca promover a produção local de alimentos, reduzir a dependência de grandes cadeias de suprimentos e aumentar a resiliência das comunidades urbanas.</p>
                        <CtaButton>Saiba mais</CtaButton>
                    </div>
                    <PlantaImage src="/assets/planta-na-mao.jpg"/>
                </div>
            </Section>
            <Section role="group-clientes">
                <Title>O que nossos clientes dizem:</Title>
                <CommentContainer>
                    <CommentClient name="Ana Silva, São Paulo" comment="A GreenGrow mudou minha perspectiva sobre agricultura urbana! Seus produtos são incrivelmente fáceis de usar e me ajudaram a transformar minha varanda em um jardim cheio de vida." />
                    <CommentClient name=" Pedro Costa, Belo Horizonte" comment="Os produtos da GreenGrow não apenas me ajudaram a economizar dinheiro em alimentos frescos, mas também me conectaram mais com minha comunidade local. Recomendo!" />
                    <CommentClient name="Maria Santos, Brasília" comment="A compostagem doméstica da GreenGrow tornou o processo de reciclagem de resíduos orgânicos tão simples e eficiente. Estou feliz em contribuir para um ambiente mais saudável!" />
                    <CommentClient name="João Pereira, Rio de Janeiro" comment="Estou impressionada com a qualidade dos sistemas de cultivo vertical da GreenGrow. Eles ocupam pouco espaço e me permitem cultivar uma grande variedade de ervas frescas em minha cozinha!" />
                </CommentContainer>
            </Section>
        </Container>
    )
}

export default Initial;