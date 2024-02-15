import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
    display: flex;
    background-color: #4b4b4b;
    width: 100%;
    padding: 2vw;
    box-sizing: border-box;
    justify-content: space-around;
`

const NavLink = styled.button`
    text-decoration: none;
    color: #fdfbf8;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: color 0.3s ease-in-out;

    &:hover{
        color:#C8C8C8;
    }
`



const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigation = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>, route : string) => {
        e.preventDefault();
        navigate(route);
    };

    return (
        <Container>
                <NavLink onClick={(event) => handleNavigation( event, '/products' )}>Produtos</NavLink>
                <NavLink onClick={(event) => handleNavigation( event, '/blog' )}>Blog</NavLink>
                <NavLink onClick={(event) => handleNavigation( event, '/projects' )}>Projetos</NavLink>
                <NavLink onClick={(event) => handleNavigation( event, '/contact' )}>Contato</NavLink>
        </Container>
    )
}

export default Navbar;