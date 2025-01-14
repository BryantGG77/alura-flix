import { MdOutlineCancel } from "react-icons/md";
import ButtonHome from "../ButtonHome/ButtonHome";


export const ModalZoom = ({ fotoSeleccionada, setFotoSeleccionada }) => {
    return (
        <>
            {fotoSeleccionada && (
                <>
                    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-10"></div>

                    <dialog
                        open={fotoSeleccionada}
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                   bg-[#03122f] shadow-lg m-0 z-20 w-[80%] py-[40px] rounded-2xl border-4 border-[#6BD1FF] text-white flex flex-col justify-center items-center md:py-[50px] lg:w-[55%]"
                    >
                        <div className="flex justify-center w-[90%] md:w-[60%] md:justify-start">
                            <h1 className="text-3xl uppercase font-black text-[#2271D1] md:text-4xl xl:text-6xl">Editar card:</h1>
                        </div>
                        <form method="dialog" className="flex flex-col gap-[15px] font-extrabold text-xl w-[90%]  md:w-[60%]">
                            <div className="flex flex-col md:gap-[15px]">
                                <label>Título</label>
                                <input type="text" placeholder="¿Que es JavaSscript?" className="bg-transparent focus:outline-none rounded-xl border-2 border-[#2271d1] py-[16px] px-[12px]" />
                            </div>
                            <div className="flex flex-col md:gap-[15px]">
                                <label htmlFor="categoria">Categoría</label>
                                <select
                                    name="categoria"
                                    id="categoria"
                                    defaultValue=""
                                    className="bg-transparent focus:outline-none rounded-xl  border-2 border-[#2271d1] py-[16px] px-[12px]"
                                    required
                                >
                                    <option
                                        className="bg-[#03122f] "
                                        value=""
                                        disabled
                                        hidden
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
                                <input type="text" placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fapps..." className="bg-transparent focus:outline-none rounded-xl border-2 border-[#2271d1] py-[16px] px-[12px]" />
                            </div>
                            <div className="flex flex-col md:gap-[15px]">
                                <label>Video</label>
                                <input type="text" placeholder="https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fap.." className="bg-transparent focus:outline-none rounded-xl border-2 border-[#2271d1] py-[16px] px-[12px]" />
                            </div>
                            <div className="flex flex-col md:gap-[15px]">
                                <label>Descripción</label>
                                <textarea rows={3} type="text" placeholder="lorem ipsum dolor sit amet consectetur adipiscing elit" className="bg-transparent focus:outline-none rounded-xl border-2 border-[#2271d1] py-[16px] px-[12px]" />
                            </div>
                            <div className="flex flex-col items-center gap-[15px] md:flex-row md:justify-between">
                                <ButtonHome title="Guardar" onClick={() => setFotoSeleccionada(false)} />
                                <button className="cursor-pointer buttonHeader w-[180.13px] h-[54px] flex justify-center items-center border-2 border-white text-xl leading-6 font-black rounded-xl uppercase hover:border-[#2271D1] hover:bg-black hover:text-[#2271D1]" type="reset">Limpiar</button>
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
