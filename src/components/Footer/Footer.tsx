import styled from "styled-components";

const Container = styled.section`
    width: 100%
    display: flex;
    justify-content: space-around;
    background-color: var(--dartmouth-green);
    padding: 3em 1em;
    color: var(--baby-powder);
    font-size: 18px;
`

const Link = styled.a`
    text-decoration: none;
    color: var(--baby-powder);
    transition: color ease-in-out 0.3s;

    &:hover{
        color: var(--pigment-green);
    }
`

const Footer = () => {
    return (
        <Container>
            <div>
                <p>Criado por <Link href="https://github.com/NatanVilasBoas">Natan Vilas Boas</Link></p>
                <p>Copyright &copy; Natan Vilas Boas - 2024</p>
            </div>
            <div>

            </div>
        </Container>
    )
}

export default Footer;