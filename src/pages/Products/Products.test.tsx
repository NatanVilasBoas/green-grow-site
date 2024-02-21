import { render, screen } from "@testing-library/react"
import Products from "./Products";
import CarrinhoProvider from "../../context/Carrinho";

describe('Na página de produtos', () => {
    test('devem ser apresentados os produtos', () => {
        render(<CarrinhoProvider>
        <Products/>
        </CarrinhoProvider>)

        const produtos = screen.getAllByRole('product');
        produtos.forEach(produto => {
            expect(produto).toBeInTheDocument();
        })
    })

    test('deve ser apresentado a barra de pesquisa', () => {
        render(<CarrinhoProvider>
            <Products/>
            </CarrinhoProvider>)

            const searchBar = screen.getByPlaceholderText('Busque por um produto');
            expect(searchBar).toBeInTheDocument();
    })
})