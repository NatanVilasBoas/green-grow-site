import styled from "styled-components";
import CardProduct from "../../components/CardProduct/CardProduct";


const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Products = () => {
    return(
        <Container>
            <CardProduct
                titulo="Sistema de Cultivo Vertical" 
                valor={299.00} 
                quant={50} 
                img="https://via.placeholder.com/250x200" 
                desc="Um sistema compacto que permite cultivar uma variedade de plantas verticalmente, economizando espaço e maximizando o potencial de cultivo em ambientes urbanos."/>
            <CardProduct
                titulo="Composteira Doméstica" 
                valor={149.00} 
                quant={100} 
                img="https://via.placeholder.com/250x200" 
                desc="Uma composteira compacta para uso doméstico, que transforma resíduos orgânicos em composto rico em nutrientes para fertilizar o solo."/>
            <CardProduct
                titulo="Kit de Plantio de Ervas" 
                valor={49.90} 
                quant={200} 
                img="https://via.placeholder.com/250x200" 
                desc="Um conjunto completo de sementes, vasos e substratos para cultivar uma variedade de ervas frescas em casa."/>
            <CardProduct
                titulo="Sistema de Irrigação Automatizado" 
                valor={199} 
                quant={30} 
                img="https://via.placeholder.com/250x200" 
                desc="Um sistema de irrigação inteligente que automatiza o processo de rega de plantas, garantindo uma irrigação precisa e eficiente."/>
        </Container>
    )
}

export default Products;