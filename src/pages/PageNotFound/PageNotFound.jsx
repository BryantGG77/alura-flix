
const PageNotFound = () => {
    return (
        <section className="w-full h-screen flex flex-col gap-10 justify-center items-center md:flex-row">
            <img className="w-[70%] md:w-[30%]" src="./img/Connection Error.gif" alt="Error 404 Page Not Found" />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-9xl font-black text-[#257be5]">404</h1>
                <p className="text-3xl">Page Not Found</p>
            </div>

        </section>
    )
}

export default PageNotFound