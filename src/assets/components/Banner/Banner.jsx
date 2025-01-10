import Categoria from "../Categoria/Categoria";

export const Banner = () => {
    return (
        <section className="relative w-full h-[722px]">
            <section className="absolute inset-0 -z-1">
                <div className="w-full h-full bg-[url('/img/bg-banner.png')] bg-no-repeat bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-[#00254e] opacity-50"></div>
            </section>
            <section className="relative flex flex-col justify-center items-center w-full h-full px-10 gap-12 xl:flex-row">
                <div className="flex flex-col gap-10">
                    <Categoria title="Front end" color="#6bd1ff" />
                    <div className="max-w-[662px] flex flex-col gap-4">
                        <h2 className="text-5xl ">Challenge React</h2>
                        <p className="text-lg">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                    </div>
                </div>

                <img src="./img/player.png" alt="Video" />


            </section>
        </section>
    );
};

export default Banner;
