import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import ContenidoVideos from './components/ContenidoVideos/ContenidoVideos'
import ModalZoom from './components/ModalZoom/ModalZoom'
import { useState } from 'react'


function App() {
  const [fotoSeleccionada, setFotoSeleccionada] = useState(false);


  return (
    <>
      <Header />
      <Banner />
      <ContenidoVideos setFotoSeleccionada={setFotoSeleccionada} />
      <Footer />
      <ModalZoom fotoSeleccionada={fotoSeleccionada} setFotoSeleccionada={setFotoSeleccionada} />
    </>
  )
}

export default App
