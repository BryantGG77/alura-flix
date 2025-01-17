import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {

    const [fotoSeleccionada, setFotoSeleccionada] = useState(false);
    const [categorias, setCategorias] = useState([]);
    const [videos, setVideos] = useState([]);


    // Traer informacion de videos y categorias
    useEffect(() => {
        fetch("https://6748ba9c5801f5153591fb97.mockapi.io/categorias")
            .then(res => res.json())
            .then(data => setCategorias(data));

        fetch("https://6748ba9c5801f5153591fb97.mockapi.io/videos")
            .then(res => res.json())
            .then(data => setVideos(data));
    }, []);

    const agregarVideo = async (nuevoVideo) => {
        try {
            const response = await fetch("https://6748ba9c5801f5153591fb97.mockapi.io/videos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(nuevoVideo),
            });
            const data = await response.json();
            setVideos((prevVideos) => [...prevVideos, data]);
            alert("Video agregado exitosamente");

        } catch (error) {
            console.error("Error al agregar video:", error);
            alert("Error al agregar video");
        }
    };

    const actualizarVideo = async (id, videoActualizado) => {
        try {
            await fetch(`https://6748ba9c5801f5153591fb97.mockapi.io/videos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(videoActualizado),
            });
            setVideos(videos.map(video => video.id === id ? videoActualizado : video));
            alert("Video actualizado exitosamente");
        } catch (error) {
            console.error("Error al actualizar video:", error);
            alert("Error al actualizar video");
        }
    };

    const borrarVideo = async (id) => {
        try {
            await fetch(`https://6748ba9c5801f5153591fb97.mockapi.io/videos/${id}`, {
                method: "DELETE",
            });
            setVideos(videos.filter(video => video.id !== id));
            alert("Video borrado exitosamente");
        } catch (error) {
            console.error("Error al borrar video:", error);
            alert("Error al borrar video");
        }
    };


    return (
        <GlobalContext.Provider value={{ fotoSeleccionada, setFotoSeleccionada, categorias, setCategorias, videos, setVideos, agregarVideo, actualizarVideo, borrarVideo }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;
export { GlobalContext };