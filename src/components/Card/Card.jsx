import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";

const Card = ({ imagen, titulo, id }) => {

    const { setFotoSeleccionada, borrarVideo, accederVideo, setVideoSeleccionado } = useContext(GlobalContext);

    return (
        <section className=" w-[282px] h-[252.85px] md:w-[430px] md:h-[319.85px] bg-black rounded-2xl border-4 border-[#6BD1FF] overflow-hidden shrink-0">
            <Link to={`/video/${id}`}>
                <img className="w-[280px] h-[200px] md:w-[425px] md:h-[235.85px] object-contain" src={imagen} alt={titulo}></img>
            </Link>
            <div className="flex justify-around items-center w-full md:h-[75px]">
                <button className="flex font-black text-base uppercase gap-5 items-center" onClick={() => borrarVideo(id)}>
                    <img src="./img/delete.png" alt="Delete icon" />
                    Borrar
                </button>

                <button className="flex font-black text-base uppercase gap-5 items-center justify-center" onClick={() => {
                    setFotoSeleccionada(true);
                    setVideoSeleccionado(accederVideo(id));
                }}>
                    <img src="./img/edit.png" alt="Edit icon" />
                    Editar
                </button>
            </div>
        </section>
    )
}


export default Card