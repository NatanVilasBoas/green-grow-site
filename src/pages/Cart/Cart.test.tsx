import { render, screen } from "@testing-library/react"
import CarrinhoProvider from "../../context/Carrinho"
import Cart from "./Cart"

describe('Na página do carrinho de compras', () => {
    test('deve constar os itens selecionados caso existam', () => {
        render(<CarrinhoProvider>
            <Cart/>
        </CarrinhoProvider> )

        const itens = screen.queryAllByRole('item');

        itens.forEach(item => {
            expect(item).toBeInTheDocument();
        })
    })
})