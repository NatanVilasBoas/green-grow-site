import { render, screen } from "@testing-library/react"
import CardProduct from "./CardProduct";

describe('No card de produto', () => {
    test('deve haver a descrição do produto', () => {
        render(<CardProduct titulo="test" valor={1} quant={1} img="test" desc="test"/>)

        const descricao = screen.getByText('Descrição:');

        expect(descricao).toBeInTheDocument();
    })
})