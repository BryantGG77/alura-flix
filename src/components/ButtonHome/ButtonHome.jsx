const ButtonHome = ({ title, link, onClick }) => {
    return (
        <a href={link} className="cursor-pointer buttonHeader w-[180.13px] h-[54px] flex justify-center items-center border-2 border-white text-xl leading-6 font-black rounded-xl uppercase hover:border-[#2271D1] hover:bg-black hover:text-[#2271D1]" onClick={onClick}>{title}</a>

    )
}

export default ButtonHome