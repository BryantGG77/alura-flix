import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {

    const [fotoSeleccionada, setFotoSeleccionada] = useState(false);
    const [categorias, setCategorias] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://6748ba9c5801f5153591fb97.mockapi.io/categorias")
            .then(res => res.json())
            .then(data => setCategorias(data));

        fetch("https://6748ba9c5801f5153591fb97.mockapi.io/videos")
            .then(res => res.json())
            .then(data => setVideos(data));
    }, [setCategorias, setVideos]);

    return (
        <GlobalContext.Provider value={{ fotoSeleccionada, setFotoSeleccionada, categorias, setCategorias, videos, setVideos }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;
export { GlobalContext };