import CardProduct from "../../components/CardProduct/CardProduct";
import { useCarrinhoContext } from "../../context/Carrinho";

const Cart = () => {
    const {itens} = useCarrinhoContext();

    return(
        <section>
            {itens.map((item : Record<string, any>) => {
               return <CardProduct key={item.id} titulo={item.id} valor={item.valor} quant={item.quant} img={item.img} desc={item.desc}/>
            })}
        </section>
    )
}

export default Cart;