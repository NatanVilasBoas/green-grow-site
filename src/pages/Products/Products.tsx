import styled from "styled-components";
import CardProduct from "../../components/CardProduct/CardProduct";
import { Bounce, ToastContainer, toast } from "react-toastify";
import produtos from "../../dbProducts.json";

import 'react-toastify/dist/ReactToastify.css';
import SearchBar from "../../components/SearchBar/SearchBar";

const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`

const Products = () => {

    const notify = () => {
        toast.success('Item adicionado ao carrinho', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        })
    };

    return (
        <>
            <SearchBar />
            <Container>
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    theme="light"
                />

                {produtos.map(produto =>
                    <CardProduct
                        key={produto.id}
                        id={produto.id}
                        titulo={produto.title}
                        valor={produto.value}
                        quant={produto.quant}
                        desc={produto.desc}
                        img="https://placehold.co/250x200"
                        onAddToCart={() => notify()}
                    />)}
            </Container>
        </>
    )
}

export default Products;