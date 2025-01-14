import { useState } from "react";
import Banner from "../../components/Banner/Banner"
import ContenidoVideos from "../../components/ContenidoVideos/ContenidoVideos"
import ModalZoom from "../../components/ModalZoom/ModalZoom"

const Inicio = () => {

    const [fotoSeleccionada, setFotoSeleccionada] = useState(false);

    return (
        <>
            <Banner />
            <ContenidoVideos setFotoSeleccionada={setFotoSeleccionada} />
            <ModalZoom fotoSeleccionada={fotoSeleccionada} setFotoSeleccionada={setFotoSeleccionada} />
        </>
    )
}

export default Inicio