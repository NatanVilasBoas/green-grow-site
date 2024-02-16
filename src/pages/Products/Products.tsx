import CardProduct from "../../components/CardProduct/CardProduct";


const Products = () => {
    return(
        <section>
            <CardProduct
                titulo="test" 
                valor={100} 
                quant={100} 
                img="test" 
                desc="test"/>
        </section>
    )
}

export default Products;