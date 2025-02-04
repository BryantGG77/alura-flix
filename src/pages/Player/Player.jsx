import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PageNotFound from "../PageNotFound/PageNotFound";

export const Player = () => {

    const [video, setVideo] = useState([]);
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://6748ba9c5801f5153591fb97.mockapi.io/videos?id=${parametros.id}`)
            .then(res => res.json())
            .then(data => setVideo(...data));
    }, [parametros.id]);


    if (!video) {
        return <PageNotFound />
    }

    return (
        <section className="w-full h-[100vh] flex flex-col justify-center items-center p-[20px] xl:h-full">
            <h3 className="text-3xl py-4 uppercase font-black md:text-5xl xl:pt-10">Reproductor de video</h3>
            <div className="relative flex justify-center items-center pb-[56.25%] h-0 overflow-hidden w-[100%] md:w-[80%]">
                <iframe className="absolute top-0 left-0 w-full h-full border-0 md:h-[65%] md:top-[80px]" width="560" height="315" src={video.video} title={video.titulo} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </section>
    )
}


