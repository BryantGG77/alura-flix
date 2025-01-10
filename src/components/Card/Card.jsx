
const Card = () => {
    return (
        <section className="w-[430px] h-[319.85px] bg-black rounded-2xl border-4 border-[#6BD1FF]">
            <div>
                <img className="w-[429.19px] h-[260.85px] object-cover" src="./img/player.png" alt="" />
            </div>
            <div className="flex justify-center items-center ">
                <div className="flex">
                    <img src="./img/delete.png" alt="Delete icon" />
                    Borrar
                </div>

                <div className="flex">
                    <img src="./img/edit.png" alt="Edit icon" />
                    Editar
                </div>
            </div>
        </section>
    )
}

export default Card