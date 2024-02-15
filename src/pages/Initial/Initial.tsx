import { useEffect } from "react";
import CtaButton from "../../components/CtaButton/CtaButton";
import styled from "styled-components";
import CardBeneficio from "../../components/CardBeneficio/CardBeneficio";


const Container = styled.div`
    margin: 3vh 2vw;
`

const Beneficios = styled.section`
    display: flex;
    margin: 2vh 2vw;
    justify-content: space-between;
`

const Initial = () => {
    useEffect( () => {
            document.title = 'Inicial';
    })
    return (
        <Container>
            <h1>Bem-vindo à GreenGrow - Transformando a Agricultura Urbana</h1>
            <p>Seja bem-vindo à GreenGrow, sua fonte líder em soluções de agricultura urbana sustentável. Oferecemos uma variedade de produtos inovadores para ajudar você a cultivar alimentos frescos e saudáveis em seu próprio espaço urbano, de maneira fácil, sustentável e acessível.</p>

            <Beneficios role="group">
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
           
            <CtaButton>Saiba mais</CtaButton>
            <CtaButton>Explore nossos produtos</CtaButton>
        </Container>
    )
}

export default Initial;