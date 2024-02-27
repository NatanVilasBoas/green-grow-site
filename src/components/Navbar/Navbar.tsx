import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCarrinhoContext } from "../../context/Carrinho";

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
    color: var(--baby-powder);
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: color 0.3s ease-in-out;

    &:hover{
        color:#C8C8C8;
    }
`

const CartIconContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CartCounter = styled.p`
    display: inline-block;
    background-color: var(--pigment-green);
    padding: 0.3em;
    border-radius: 55px;
`

const Navbar = () => {
    const navigate = useNavigate();
    const { itens } = useCarrinhoContext();
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCounter(itens.length)
    }, [itens])

    const handleNavigation = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, route: string) => {
        e.preventDefault();
        navigate(route);
    };

    return (
        <Container>
            <NavLink onClick={(event) => handleNavigation(event, '/')}>Inicio</NavLink>
            <NavLink onClick={(event) => handleNavigation(event, '/products')}>Produtos</NavLink>
            <NavLink onClick={(event) => handleNavigation(event, '/blog')}>Blog</NavLink>
            <NavLink onClick={(event) => handleNavigation(event, '/contact')}>Contato</NavLink>
            <NavLink onClick={(event) => handleNavigation(event, '/cart')}>
                <CartIconContainer>
                    {counter > 0 && <CartCounter>{counter}</CartCounter>}
                    <img src="assets/cartIcon.svg" alt="carrinho de compras" />
                </CartIconContainer></NavLink>
        </Container>
    )
}

export default Navbar;