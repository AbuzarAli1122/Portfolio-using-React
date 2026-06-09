import react from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <div style={{ backgroundColor:'black'}}>

      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App
