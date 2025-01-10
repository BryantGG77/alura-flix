
const Categoria = ({ title, color }) => {
    return (
        <section className="w-[286px] h-[70px] flex justify-center items-center rounded-2xl md:w-[432px]" style={{ backgroundColor: color }}>
            <h1 className="text-xl uppercase font-black md:text-4xl" >{title}</h1>
        </section>
    )
}

export default Categoria