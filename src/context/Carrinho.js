import { createContext, useContext, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export default function CarrinhoProvider({children}) {
    const [itens, setItens] = useState([]);

    return(
        <CarrinhoContext.Provider value={{itens, setItens}}>
            {children}
        </CarrinhoContext.Provider>
    )

}

export function useCarrinhoContext(){
    const {itens, setItens} = useContext(CarrinhoContext);

    const addItem = (newItem) => {
        const existingItemIndex = itens.findIndex(item => item.id === newItem.id);

        if (existingItemIndex !== -1) {
            const updatedItens = [...itens];
            updatedItens[existingItemIndex].quant += 1;
            setItens(updatedItens);
        } else {
            setItens([...itens, {...newItem}]);
        }
    }

    const removeItem = (itemId) => {
        setItens(itens.filter((item) => item.id !== itemId));
    }

    const clearCart = () => {
        setItens([]);
    }

    return{
        itens,
        addItem,
        removeItem,
        clearCart
    }
}