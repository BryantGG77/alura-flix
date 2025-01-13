import SeccionVideo from "../SeccionVideos/SeccionVideos";
import data from "./data/data.json";

const ContenidoVideos = ({ setFotoSeleccionada }) => {
    return (
        <section className="flex flex-col gap-20 px-5 pb-32 max-md:pt-32 md:px-11">
            {data.map(data => (
                <SeccionVideo
                    key={data.id}
                    data={data.videos}
                    categoria={data.categoria}
                    color={data.color}
                    setFotoSeleccionada={setFotoSeleccionada}
                />
            ))}
        </section>
    );
};

export default ContenidoVideos;
