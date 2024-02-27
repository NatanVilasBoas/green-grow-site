import { render, screen } from "@testing-library/react"
import Blog from "./Blog";
import { BrowserRouter } from "react-router-dom";

describe('Na página do Blog', () => {
    test('Devem aparecer os posts', () => {
        render( <BrowserRouter>
        <Blog/>
        </BrowserRouter>)

        const posts = screen.getAllByRole('post');

        posts.forEach(post => {
            expect(post).toBeInTheDocument();
        })
    })
})