import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

const PaginaBase = () => {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default PaginaBase