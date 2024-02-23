import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CarrinhoProvider from "./context/Carrinho";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
import PostBlog from "./pages/PostBlog/PostBlog";

const Initial = lazy(() => import('./pages/Initial/Initial'))
const Products = lazy(() => import('./pages/Products/Products'))
const Cart = lazy(() => import('./pages/Cart/Cart'))
const Blog = lazy(() => import('./pages/Blog/Blog'))

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <CarrinhoProvider>
                <Navbar />
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        <Route path="/" element={<Initial />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<PostBlog />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Suspense>
                <Footer />
            </CarrinhoProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;