import { fireEvent, render, screen } from "@testing-library/react"
import Initial from "./Initial";

const mockNavegacao = jest.fn();

jest.mock('react-router-dom', () => {
    return{
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockNavegacao
    }
})

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

        const section = screen.getByRole('group-beneficios');

        expect(section).toBeInTheDocument();
    })

    test('deve conter os relatos de clientes', () => {
        render(<Initial/>)

        const relatoClientes = screen.getByRole('group-clientes');

        expect(relatoClientes).toBeInTheDocument();
    })

    test('os CTAs devem redirecionar a outras páginas', () => {
        render(<Initial/>)

        const buttons = screen.getAllByRole('button');

        buttons.forEach((button) => {
            fireEvent.click(button)
        })

        expect(mockNavegacao).toHaveBeenCalledTimes(buttons.length);
    })
})