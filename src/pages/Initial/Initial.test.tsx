import { render, screen } from "@testing-library/react"
import Initial from "./Initial";

describe('A página inicial', () => {
    test('deve ser renderizada', () => {
        const {container} = render(<Initial/>)

        expect(container).toMatchSnapshot();
    })

    test('deve conter os botões CTA\'\s', () => {
        render(<Initial />)

        const botoes = screen.getAllByRole('button');
        botoes.forEach(botao => {
            expect(botao).toBeInTheDocument();
        })

    })
})