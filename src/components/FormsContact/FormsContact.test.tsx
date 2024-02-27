import { fireEvent, render, screen } from "@testing-library/react"
import FormsContact from "./FormsContact";

describe('No forms de contato', () => {
    test('E-mail e nome são obrigatórios', () => {
        render(<FormsContact/>)

        const email = screen.getByLabelText('E-mail:');
        const nome = screen.getByLabelText('Nome:');

        expect(email).toBeRequired();
        expect(nome).toBeRequired();
    })


    test('Se e-mail e nome forem preenchidos, mensagem e botão devem estar habilitados', () => {
        render(<FormsContact/>)

        const email = screen.getByLabelText('E-mail:');
        const nome = screen.getByLabelText('Nome:');
        const mensagem = screen.getByLabelText('Mensagem:');
        const botao = screen.getByRole('button');

        fireEvent.change(nome, {target: {value: 'joão'}})
        fireEvent.change(email, {target: {value: 'joão@email.com'}})

        expect(mensagem).toBeEnabled();
        expect(botao).toBeEnabled();
    })
})