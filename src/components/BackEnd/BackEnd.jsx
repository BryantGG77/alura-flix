import Card from "../Card/Card"
import Categoria from "../Categoria/Categoria"




const BackEnd = () => {
    return (
        <section className="flex flex-col gap-10">
            <Categoria title="Front End" color="#6bd1ff" />
            <div className="flex gap-[30px]">
                <Card />
                <Card />
                <Card />

            </div>
        </section>
    )
}

export default BackEnd