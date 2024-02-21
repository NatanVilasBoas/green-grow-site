import { render, screen } from "@testing-library/react"
import Blog from "./Blog";

describe('Na página do Blog', () => {
    test('Devem aparecer os posts', () => {
        render(<Blog/>)

        const posts = screen.getAllByRole('post');

        posts.forEach(post => {
            expect(post).toBeInTheDocument();
        })
    })
})