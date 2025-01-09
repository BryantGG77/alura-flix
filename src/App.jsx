import './App.css'
import Footer from './assets/components/Footer/Footer'
import Header from './assets/components/Header/Header'

function App() {

  return (
    <>
      <div className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
        <Header />
        <div></div>
        <Footer />
      </div>
    </>
  )
}

export default App
