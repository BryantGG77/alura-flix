import HeaderButton from "./HeaderButton/HeaderButton"
const Header = () => {
    return (
        <header className="header flex justify-between items-center py-9 px-12 bg-[#0a1017] border-b-4 border-[#2271D1]">
            <img src="./img/logo.png" alt="Logo AluraFlix" />
            <nav className="flex gap-6">
                <HeaderButton title="Home" link="/" />
                <HeaderButton title="nuevo video" link="/favoritos" />
            </nav>
        </header>
    )
}

export default Header