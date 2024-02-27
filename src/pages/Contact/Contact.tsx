import styled from "styled-components";
import FormsContact from "../../components/FormsContact/FormsContact";


const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2vh;
    font-weight: 300;
    margin-left: 2vw;
`

const Formulario = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    padding: 4rem;
    border-top: 4px solid var(--russet);
    border-bottom: 4px solid var(--russet);
`

const Contact = () => {
    return (
        <section>
            <Info data-testid='info'>
            <h1>Entre em Contato Conosco</h1>
            <p>Estamos felizes em ouvir de você! Se você tiver alguma dúvida, sugestão ou gostaria de saber mais sobre nossos serviços, não hesite em entrar em contato conosco. Você pode usar o formulário abaixo ou nos contatar diretamente por telefone ou e-mail.</p>
                <h3>Informações de Contato</h3>
                <ul>
                    <li><strong>Endereço:</strong> Av. das Plantas, 123 - Jardim Sustentável, Cidade Verde - Estado Verde, CEP: 12345-678</li>
                    <li><strong>Telefone:</strong> (11) 5555-1234</li>
                    <li><strong>E-mail:</strong> contato@greengrow.org.br</li>
                </ul>
            </Info>
            <Formulario>
                <h2>Formulário para Contato</h2>
                <FormsContact />
            </Formulario>
        </section>
    )
}

export default Contact;