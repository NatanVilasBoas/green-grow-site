import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import { useCarrinhoContext } from "../../context/Carrinho";


// Mock do useCarrinhoContext para retornar itens
jest.mock("../../context/Carrinho", () => ({
  __esModule: true,
  useCarrinhoContext: jest.fn(),
}));

describe('Página do Carrinho', () => {
  test('deve exibir os itens quando existem itens no carrinho', () => {
    // Mock dos itens retornados pelo contexto
    (useCarrinhoContext as jest.Mock).mockReturnValue({ itens: [{ id: 1, titulo: "Item 1", valor: 10.0, quant: 1, img: "imagem1.jpg", desc: "Descrição do item 1" }] });

    render(
        <Cart />
    );

    // Verifica se os itens estão sendo exibidos corretamente
    const itemElement = screen.getByRole("item");
    expect(itemElement).toBeInTheDocument();
  });

  test('deve exibir a mensagem de carrinho vazio quando não há itens no carrinho', () => {
    // Mock dos itens retornados pelo contexto (carrinho vazio)
    (useCarrinhoContext as jest.Mock).mockReturnValue({ itens: [] });

    render(
        <Cart />
    );

    // Verifica se a mensagem de carrinho vazio está sendo exibida corretamente
    const mensagemCarrinhoVazio = screen.getByText('Não há itens no carrinho.');
    expect(mensagemCarrinhoVazio).toBeInTheDocument();
  });
});
