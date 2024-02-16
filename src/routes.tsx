import { BrowserRouter, Route, Routes } from "react-router-dom"
import Initial from "./pages/Initial/Initial"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Initial/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes;