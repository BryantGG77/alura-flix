
const Card = ({ url }) => {
    return (
        <section className="w-[430px] h-[319.85px] bg-black rounded-2xl border-4 border-[#6BD1FF] overflow-hidden">
            <div>
                <iframe width="422" height="260.85" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="flex justify-around items-center ">
                <button className="flex font-black text-base uppercase gap-5 items-center">
                    <img src="./img/delete.png" alt="Delete icon" />
                    Borrar
                </button>

                <button className="flex font-black text-base uppercase gap-5 items-center justify-center">
                    <img src="./img/edit.png" alt="Edit icon" />
                    Editar
                </button>
            </div>
        </section>
    )
}

export default Card