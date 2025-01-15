import { useContext } from "react";
import SeccionVideo from "../SeccionVideos/SeccionVideos";
import { GlobalContext } from "../../context/GlobalContext";

const ContenidoVideos = () => {

    const { categorias, videos } = useContext(GlobalContext);


    return (
        <section className="flex flex-col gap-20 px-5 pb-32 max-md:pt-32 md:px-11">
            {categorias.map(data => (
                <SeccionVideo
                    key={data.id}
                    data={videos.filter(video => video.categoria === data.categoria)}
                    categoria={data.categoria}
                    color={data.color}
                />
            ))}
        </section>
    );
};

export default ContenidoVideos;
