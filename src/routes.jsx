import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaBase from "./pages/PaginaBase/PaginaBase"
import Inicio from "./pages/Inicio/Inicio"
import NuevoVideo from "./pages/NuevoVideo/NuevoVideo"
import { Player } from "./pages/Player/Player"
import PageNotFound from "./pages/PageNotFound/PageNotFound"


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path="nuevo-video" element={<NuevoVideo />} />
                    <Route path="video/:id" element={<Player />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes