import { render, screen } from "@testing-library/react"
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

describe('Na navbar', () => {
    test('Os links devem ser renderizados', () => {
        render(
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter> )

        const contatoLink = screen.getByText('Contato');
        const produtosLink = screen.getByText('Produtos');
        const blogLink = screen.getByText('Blog');
        const projetosLink = screen.getByText('Projetos');

        expect(contatoLink).toBeInTheDocument();
        expect(produtosLink).toBeInTheDocument();
        expect(blogLink).toBeInTheDocument();
        expect(projetosLink).toBeInTheDocument();
    })
})