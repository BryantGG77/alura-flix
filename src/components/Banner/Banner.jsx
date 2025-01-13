import Categoria from "../Categoria/Categoria";

export const Banner = () => {
    return (
        <section className="relative w-full h-[722px] mt-4">
            <section className="absolute inset-0 -z-1">
                <div className="w-full h-full bg-[url('/img/bg-banner.png')] bg-no-repeat bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-[#00254e] opacity-50"></div>
            </section>
            <section className="relative flex flex-col justify-center items-center w-full h-full gap-4 px-5 md:px-10 md:py-5  md:gap-12 xl:flex-row">
                <div className="flex flex-col gap-4 md:gap-10">
                    <Categoria title="Front end" color="#6bd1ff" />
                    <div className="max-w-[662px] flex flex-col gap-4">
                        <h2 className="text-3xl md:text-5xl">Qué significa pensar como programador</h2>
                        <p className="text-lg">¿Cuáles son las principales características de un programador? ¿Qué habilidades y competencias debe tener alguien que quiere seguir esa carrera?

                            En este video Christian Velasco nos habla de las principales características de un Programador...</p>
                    </div>
                </div>

                <div className="relative flex justify-center items-center rounded-2xl border-4 border-[#6BD1FF] borde1 ">
                    {/* <img src="./img/player.png" alt="Video" /> */}
                    <iframe className="rounded-2xl border-0 md:w-[560px] md:h-[315px]" width="280" height="200" src="https://www.youtube.com/embed/ov7vA5HFe6w?si=XKvIuZWUEtExr5x2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>


            </section>
        </section>
    );
};

export default Banner;
