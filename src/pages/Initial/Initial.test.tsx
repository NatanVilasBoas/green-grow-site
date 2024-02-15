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

    test('deve conter os benefícios', () => {
        render(<Initial/>)

        const section = screen.getByRole('group');

        expect(section).toBeInTheDocument();
    })
})