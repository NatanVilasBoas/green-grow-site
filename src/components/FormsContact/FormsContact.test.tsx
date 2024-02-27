import { render, screen } from "@testing-library/react"
import FormsContact from "./FormsContact";

describe('No forms de contato', () => {
    test('E-mail e nome são obrigatórios', () => {
        render(<FormsContact/>)

        const email = screen.getByLabelText('E-mail:');
        const nome = screen.getByLabelText('Nome:');

        expect(email).toBeRequired();
        expect(nome).toBeRequired();
    })
})