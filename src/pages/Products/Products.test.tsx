import { render, screen } from "@testing-library/react"
import Products from "./Products";

describe('Na página de produtos', () => {
    test('devem ser apresentados os produtos', () => {
        render(<Products/>)

        const produtos = screen.getAllByRole('product');
        produtos.forEach(produto => {
            expect(produto).toBeInTheDocument();
        })
    })
})