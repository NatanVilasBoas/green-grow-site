import { render, screen } from "@testing-library/react"
import CardProduct from "./CardProduct";
import CarrinhoProvider from "../../context/Carrinho";

describe('No card de produto', () => {
    test('deve haver a descrição do produto', () => {
        render(<CarrinhoProvider>
            <CardProduct titulo="test" valor={1} quant={1} img="test" desc="test" onAddToCart={() => null} />
        </CarrinhoProvider>)

        const descricao = screen.getByText('Descrição:');

        expect(descricao).toBeInTheDocument();
    })
})