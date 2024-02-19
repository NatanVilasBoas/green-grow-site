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
})