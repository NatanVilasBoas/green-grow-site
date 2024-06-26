import { fireEvent, render, screen } from "@testing-library/react"
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import CarrinhoProvider from "../../context/Carrinho";

const mockNavegacao = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockNavegacao
    }
})

describe('Na navbar', () => {
    test('Os links devem ser renderizados', () => {
        render(
            <BrowserRouter>
                <CarrinhoProvider>
                    <Navbar />
                </CarrinhoProvider>
            </BrowserRouter>)

        const inicioLink = screen.getByText('Inicio');
        const contatoLink = screen.getByText('Contato');
        const produtosLink = screen.getByText('Produtos');
        const blogLink = screen.getByText('Blog');
        const carrinhoLink = screen.getByAltText('carrinho de compras');

        expect(inicioLink).toBeInTheDocument();
        expect(contatoLink).toBeInTheDocument();
        expect(produtosLink).toBeInTheDocument();
        expect(blogLink).toBeInTheDocument();
        expect(carrinhoLink).toBeInTheDocument();
    })

    test('Os links devem redirecionar a outras páginas', () => {
        render(
            <BrowserRouter>
                <CarrinhoProvider>
                    <Navbar />
                </CarrinhoProvider>
            </BrowserRouter>
        )

        const links = screen.getAllByRole('button');

        links.forEach((link) => {
            fireEvent.click(link)

        })

        expect(mockNavegacao).toHaveBeenCalledTimes(links.length);
    })
})