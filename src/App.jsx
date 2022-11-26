import React from 'react'
import './index.js'
import Header from './components/header/header' 
import Nav from './components/nav/nav'
import About from './components/about/about'
import Exp from './components/exp/exp'
import Services from './components/services/services'
import Port from './components/port/port'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Exp />
        <Services />
        <Port />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App
