import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import ContenidoVideos from './components/ContenidoVideos/ContenidoVideos'

function App() {



  return (
    <>
      {/* <section className='grid min-h-screen grid-rows-[auto_1fr_auto]'> */}
      <Header />
      <Banner />
      <ContenidoVideos />
      <Footer />
      {/* </section> */}
    </>
  )
}

export default App
