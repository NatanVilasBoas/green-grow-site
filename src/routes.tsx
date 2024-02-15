import { BrowserRouter, Route, Routes } from "react-router-dom"
import Initial from "./pages/Initial/Initial"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Initial/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;