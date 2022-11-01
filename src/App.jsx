import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portifolio from './components/portifolio/Portifolio'


const App = props => {
  return (
    <>
     <Header />
     <Nav />
     <About />
     <Experience />
     <Portifolio />
     <Contact />
     <Footer />
    </>
  )
}



export default App