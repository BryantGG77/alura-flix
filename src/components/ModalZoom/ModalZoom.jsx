import { MdOutlineCancel } from "react-icons/md";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";


export const ModalZoom = () => {

    const { fotoSeleccionada, setFotoSeleccionada, videoSeleccionado, actualizarVideo } = useContext(GlobalContext);

    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [video, setVideo] = useState("");
    const [imagen, setImagen] = useState("");
    const [descripcion, setDescripcion] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        const videoEditado = { categoria, video, titulo, imagen, descripcion };
        if (videoSeleccionado) {
            actualizarVideo(videoSeleccionado.id, videoEditado);
            setFotoSeleccionada(false);
        }
        setCategoria("");
        setTitulo("");
        setVideo("");
        setImagen("");
        setDescripcion("");
    };


    return (
        <>
            {fotoSeleccionada && (
                <>
                    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-10"></div>

                    <dialog
                        open={fotoSeleccionada}
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                   bg-[#03122f] shadow-lg m-0 z-20 w-[80%] pt-[40px] pb-[15px] rounded-2xl border-4 border-[#6BD1FF] text-white flex flex-col justify-center items-center md:py-[50px] lg:w-[55%]"
                    >
                        <div className="flex justify-center w-[90%] md:w-[60%] md:justify-start">
                            <h1 className="text-3xl uppercase font-black text-[#2271D1] md:text-4xl xl:text-6xl">Editar card:</h1>
                        </div>
                        <form method="dialog" onSubmit={handleSubmit} className="flex flex-col gap-[15px] font-extrabold text-xl w-[90%]  md:w-[60%]">
                            <div className="flex flex-col md:gap-[15px]">
                                <label>Título</label>
                                <input type="text" placeholder="¿Que es JavaSscript?" className="bg-transparent focus:outline-none rounded-xl border-2 border-[#2271d1] p-[5px] md:py-[16px] md:px-[12px]"
                                    onChange={(e) => setTitulo(e.target.value)} value={titulo} />
                            </div>
                            <div className="flex flex-col md:gap-[15px]">
                                <label htmlFor="categoria">Categoría</label>
                                <select
                                    name="categoria"
                                    id="categoria"
                                    defaultValue=""
                                    className="bg-transparent focus:outline-none rounded-xl  border-2 border-[#2271d1] p-[5px] md:py-[16px] md:px-[12px]"
                                    onChange={(e) => setCategoria(e.target.value)} value={categoria}
                                    required
                                >
                                    <option
                                        className="bg-[#03122f] "
                                        value=""
                                        disabled
                                    >
                                        Selecciona una categoría
                                    </option>
                                    <option className="bg-[#03122f]" value="Front end">Front end</option>
                                    <option className="bg-[#03122f]" value="Back end">Back end</option>
                                    <option className="bg-[#03122f]" value="Innovación y gestión">Innovación y gestión</option>
                                </select>
                            </div>

                            <div className="flex flex-col md:gap-[15px]">
                                <label>Imagen</label>
                                <input type="text" placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fapps..." className="bg-transparent focus:outline-none rounded-xl border-2 border-[#2271d1] p-[5px] md:py-[16px] md:px-[12px]"
                                    onChange={(e) => setImagen(e.target.value)} value={imagen} />
                            </div>
                            <div className="flex flex-col md:gap-[15px]">
                                <label>Video</label>
                                <input type="text" placeholder="https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fap.." className="bg-transparent focus:outline-none rounded-xl border-2 border-[#2271d1] p-[5px] md:py-[16px] md:px-[12px]"
                                    onChange={(e) => setVideo(e.target.value)} value={video} />
                            </div>
                            <div className="flex flex-col md:gap-[15px]">
                                <label>Descripción</label>
                                <textarea rows={2} type="text" placeholder="lorem ipsum dolor sit amet consectetur adipiscing elit" className="bg-transparent focus:outline-none rounded-xl border-2 border-[#2271d1] p-[5px] md:py-[16px] md:px-[12px]"
                                    onChange={(e) => setDescripcion(e.target.value)} value={descripcion} />
                            </div>
                            <div className="flex flex-col items-center gap-[15px] md:flex-row md:justify-between">
                                <button className="cursor-pointer buttonHeader w-[180.13px] h-[34px] md:h-[54px] flex justify-center items-center border-2 border-white text-sm md:text-xl leading-6 font-black rounded-xl uppercase hover:border-[#2271D1] hover:bg-black hover:text-[#2271D1]">Guardar</button>
                                <button className="cursor-pointer buttonHeader w-[180.13px] h-[34px] md:h-[54px] flex justify-center items-center border-2 border-white text-sm md:text-xl leading-6 font-black rounded-xl uppercase hover:border-[#2271D1] hover:bg-black hover:text-[#2271D1]" type="reset" onClick={() => {
                                    setTitulo("")
                                    setCategoria("")
                                    setVideo("")
                                    setImagen("")
                                    setDescripcion("")
                                }}>Limpiar</button>
                            </div>
                        </form>
                        <button
                            onClick={() => setFotoSeleccionada(false)}
                            className="absolute top-4 right-4 text-3xl text-white"
                        >
                            <MdOutlineCancel />
                        </button>
                    </dialog>
                </>
            )}
        </>
    );
};

export default ModalZoom;
