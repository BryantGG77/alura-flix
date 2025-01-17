import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext";

const Card = ({ url, id }) => {

    const { setFotoSeleccionada, borrarVideo, accederVideo, setVideoSeleccionado } = useContext(GlobalContext);

    return (
        <section className=" w-[282px] h-[252.85px] md:w-[430px] md:h-[319.85px] bg-black rounded-2xl border-4 border-[#6BD1FF] overflow-hidden shrink-0">
            <div>
                <iframe className="md:w-[422px] md:h-[260.85px]" width="280" height="200" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="flex justify-around items-center w-full h-">
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