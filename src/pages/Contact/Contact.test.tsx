import { render, screen } from "@testing-library/react"
import Contact from "./Contact";

describe('na página de contato', () => {
    test('Deverá ser renderizado as informações corretamente', () => {
            render(<Contact/>)

            const info = screen.getByTestId('info');
            const forms = screen.getByTestId('forms-contato');

            expect(info).toBeInTheDocument();
            expect(forms).toBeInTheDocument();
    })
})