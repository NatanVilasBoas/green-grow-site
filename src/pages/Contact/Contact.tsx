import styled from "styled-components";
import FormsContact from "../../components/FormsContact/FormsContact";

const Container = styled.section`
    margin: 4rem;
`

const Info = styled.div`
    font-weight: 300;
`

const Contact = () => {
    return (
        <Container>
            <h1>Entre em Contato Conosco</h1>
            <p>Estamos felizes em ouvir de você! Se você tiver alguma dúvida, sugestão ou gostaria de saber mais sobre nossos serviços, não hesite em entrar em contato conosco. Você pode usar o formulário abaixo ou nos contatar diretamente por telefone ou e-mail.</p>
            <Info data-testid='info'>
                <h3>Informações de Contato</h3>
                <ul>
                    <li><strong>Endereço:</strong> Av. das Plantas, 123 - Jardim Sustentável, Cidade Verde - Estado Verde, CEP: 12345-678</li>
                    <li><strong>Telefone:</strong> (11) 5555-1234</li>
                    <li><strong>E-mail:</strong> contato@greengrow.org.br</li>
                </ul>
            </Info>
            <h3>Formulário de Contato</h3>
            <FormsContact/>
        </Container>
    )
}

export default Contact;