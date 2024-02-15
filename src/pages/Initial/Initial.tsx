import { useEffect } from "react";
import CtaButton from "../../components/CtaButton/CtaButton";
import styled from "styled-components";
import CardBeneficio from "../../components/CardBeneficio/CardBeneficio";
import CommentClient from "../../components/CommentClient/CommentClient";


const Container = styled.div`
    margin: 3vh 4vw;
`

const Beneficios = styled.section`
    display: flex;
    margin: 2vh 2vw;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Section = styled.div`
    margin: 8vh 0;
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
                <h3 style={{ fontFamily: "Montserrat" }}>Por que escolher a GreenGrow?</h3>
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
            </Section>

            <Section>
                <h3 style={{ fontFamily: "Montserrat" }}>O que é a agricultura urbana sustentável?</h3>
                <p>É uma prática que envolve o cultivo de alimentos, plantas e outros produtos agrícolas em ambientes urbanos de maneira ecologicamente equilibrada, socialmente justa e economicamente viável. Ela busca promover a produção local de alimentos, reduzir a dependência de grandes cadeias de suprimentos e aumentar a resiliência das comunidades urbanas.</p>
            </Section>
            <Section role="group-clientes">
                <h3 style={{ fontFamily: "Montserrat" }}>O que nossos clientes dizem:</h3>
                <CommentClient name="Ana Silva, São Paulo" comment="Estou impressionada com a qualidade dos sistemas de cultivo vertical da GreenGrow. Eles ocupam pouco espaço e me permitem cultivar uma grande variedade de ervas frescas em minha cozinha!"/>
            </Section>

            <CtaButton>Saiba mais</CtaButton>
            <CtaButton>Explore nossos produtos</CtaButton>
        </Container>
    )
}

export default Initial;