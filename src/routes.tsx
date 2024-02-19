import { BrowserRouter, Route, Routes } from "react-router-dom"
import Initial from "./pages/Initial/Initial"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Products from "./pages/Products/Products";
import CarrinhoProvider from "./context/Carrinho";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <CarrinhoProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Initial />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
                <Footer />
            </CarrinhoProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;