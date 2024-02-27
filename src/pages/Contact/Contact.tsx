

const Contact = () => {
    return (
        <section>
            <h1>Entre em Contato Conosco</h1>
            <p>Estamos felizes em ouvir de você! Se você tiver alguma dúvida, sugestão ou gostaria de saber mais sobre nossos serviços, não hesite em entrar em contato conosco. Você pode usar o formulário abaixo ou nos contatar diretamente por telefone ou e-mail.</p>
            <div data-testid='info'>
                <h3>Informações de Contato</h3>
                <ul>
                    <li>Endereço: Av. das Plantas, 123 - Jardim Sustentável, Cidade Verde - Estado Verde, CEP: 12345-678</li>
                    <li>Telefone: (11) 5555-1234</li>
                    <li>E-mail: contato@greengrow.org.br</li>
                </ul>
            </div>
            <h3>Formulário de Contato</h3>
            <form data-testid='forms-contato'>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required />
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" rows={4} required></textarea>
                </div>
                <button type="submit">Enviar Mensagem</button>
            </form>
        </section>
    )
}

export default Contact;