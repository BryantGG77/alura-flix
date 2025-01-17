import Card from "../Card/Card";
import Categoria from "../Categoria/Categoria";

const SeccionVideos = ({ data = [], categoria, color }) => {
    return (
        <section className="flex flex-col gap-10">
            <Categoria title={categoria} color={color} />
            <div className="flex gap-[30px] overflow-x-auto">
                {data.length > 0 ? (
                    data.map(video => (
                        <Card key={video.id} url={video.video} id={video.id} />
                    ))
                ) : (
                    <p>No hay videos disponibles</p>
                )}
            </div>
        </section>
    );
};

export default SeccionVideos;
