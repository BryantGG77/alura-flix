import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const NuevoVideo = () => {

    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [video, setVideo] = useState("");
    const [imagen, setImagen] = useState("");
    const [descripcion, setDescripcion] = useState("");


    const { agregarVideo } = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoVideo = { categoria, video, titulo, imagen, descripcion };
        agregarVideo(nuevoVideo);
        setTitulo("");
        setCategoria("");
        setVideo("");
        setImagen("");
        setDescripcion("");
    };

    return (
        <section className="flex flex-col w-full justify-center items-center gap-10 px-[20px] py-10 md:py-[70px] md:px-[134px]">
            <section className="flex flex-col justify-center items-center">
                <h1 className="text-[36px] font-black uppercase md:text-[60px]">Nuevo video</h1>
                <p className="text-[20px] uppercase">Complete el formulario para crear una nueva tarjeta de video</p>
            </section>
            <section className="flex flex-col w-full gap-[60px]">
                <div className="flex justify-start w-full border-b-4 border-t-4 border-[#262626]">
                    <h3 className="text-[36px] font-semibold py-[16px]">Crear Tarjeta</h3>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-[60px]">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                            <label>Título</label>
                            <input type="text" placeholder="ingrese el título" className="bg-transparent focus:outline-none rounded-xl border-4 border-[#262626] py-[16px] px-[12px]" onChange={(e) => setTitulo(e.target.value)} value={titulo} required />
                        </div>
                        <div className="flex flex-col gap-4">
                            <label htmlFor="categoria">Categoría</label>
                            <select
                                name="categoria"
                                id="categoria"
                                className="bg-transparent focus:outline-none rounded-xl border-4 border-[#262626] py-[16px] px-[12px]"
                                onChange={(e) => setCategoria(e.target.value)}
                                value={categoria}
                                required
                            >
                                <option
                                    value=""
                                    disabled
                                    className="bg-[#03122f] text-gray-400"
                                >
                                    Selecciona una categoría
                                </option>
                                <option className="bg-[#03122f]" value="Front end">Front end</option>
                                <option className="bg-[#03122f]" value="Back end">Back end</option>
                                <option className="bg-[#03122f]" value="Innovación y gestión">Innovación y gestión</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-4">
                            <label>Imagen</label>
                            <input type="text" placeholder="ingrese el enlace de la imagen" className="bg-transparent focus:outline-none rounded-xl border-4 border-[#262626] py-[16px] px-[12px]" onChange={(e) => setImagen(e.target.value)} value={imagen} required />
                        </div>
                        <div className="flex flex-col gap-4">
                            <label>Video</label>
                            <input type="text" placeholder="ingrese el enlace del video" className="bg-transparent focus:outline-none rounded-xl border-4 border-[#262626] py-[16px] px-[12px]" onChange={(e) => setVideo(e.target.value)} value={video} required />
                        </div>
                        <div className="flex flex-col gap-4">
                            <label>Descripción</label>
                            <textarea type="text" placeholder="¿De qué se trata este vídeo?" className="bg-transparent focus:outline-none rounded-xl border-4 border-[#262626] py-[16px] px-[12px]" onChange={(e) => setDescripcion(e.target.value)} value={descripcion} required />
                        </div>
                    </div>
                    <div className="flex gap-[30px]">
                        <button className="w-[180.13px] h-[54px] cursor-pointer rounded-xl font-black uppercase text-[20px] border-4 border-white hover:border-[#2271D1]">Guardar</button>
                        <button className="w-[180.13px] h-[54px] cursor-pointer rounded-xl font-black uppercase text-[20px] border-4 border-white hover:border-[#2271D1]" type="reset" onClick={() => {
                            setTitulo("");
                            setCategoria("");
                            setVideo("");
                            setImagen("");
                            setDescripcion("");
                        }}>Limpiar</button>
                    </div>
                </form>
            </section>

        </section>
    )
}

export default NuevoVideo