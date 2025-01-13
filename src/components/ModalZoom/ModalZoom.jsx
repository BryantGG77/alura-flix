export const ModalZoom = ({ fotoSeleccionada, setFotoSeleccionada }) => {
    return (
        <>
            {fotoSeleccionada && (
                <>
                    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-10"></div>

                    <dialog
                        open={fotoSeleccionada}
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                   bg-white rounded-lg shadow-lg p-6 m-0 z-20 max-w-md w-full"
                    >
                        <p className="text-lg font-semibold mb-4">Greetings, one and all!</p>

                        <form method="dialog" className="flex">
                            <button
                                onClick={() => setFotoSeleccionada(false)}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                            >
                                OK
                            </button>
                        </form>
                    </dialog>
                </>
            )}
        </>
    );
};

export default ModalZoom;
