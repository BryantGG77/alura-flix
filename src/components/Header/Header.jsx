import HeaderButton from "./HeaderButton/HeaderButton"
const Header = () => {
    return (
        <header className="header gap-4 flex flex-col justify-between items-center py-6 px-12 bg-[#0a1017] border-b-4 border-[#2271D1] md:flex-row ">
            <img src="./img/logo.png" alt="Logo AluraFlix" />
            <nav className="flex flex-col gap-6 md:flex-row">
                <HeaderButton title="Home" link="/" />
                <HeaderButton title="nuevo video" link="/favoritos" />
            </nav>
        </header>
    )
}

export default Header