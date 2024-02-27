import { render, screen } from "@testing-library/react"
import Contact from "./Contact";

describe('na página de contato', () => {
    test('Deverá ser renderizado as informações corretamente', () => {
            render(<Contact/>)

            const info = screen.getByRole('main');

            expect(info).toBeInTheDocument();
    })
})