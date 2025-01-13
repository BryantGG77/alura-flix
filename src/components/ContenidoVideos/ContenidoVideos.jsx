import SeccionVideo from "../SeccionVideos/SeccionVideos";
import data from "./data/data.json";

const ContenidoVideos = () => {
    return (
        <section className="flex flex-col gap-20 px-5 md:px-11 pb-32">
            {data.map(data => (
                <SeccionVideo
                    key={data.id}
                    data={data.videos}
                    categoria={data.categoria}
                    color={data.color}
                />
            ))}
        </section>
    );
};

export default ContenidoVideos;
