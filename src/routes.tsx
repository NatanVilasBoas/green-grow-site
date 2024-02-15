import { BrowserRouter, Route, Routes } from "react-router-dom"
import Initial from "./pages/Initial/Initial"
import Navbar from "./components/Navbar/Navbar";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Initial/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;