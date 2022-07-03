import React from 'react'
import About from './LandingPage/About/About'
import Contact from './LandingPage/Contact/Contact'
import FOOTER from './LandingPage/footer/footer'
import Home from './LandingPage/Home/Home'
import PortFolio from './LandingPage/PortFolio/PortFolio'
import Services from './LandingPage/Services/Services'

export default function App() {
  return (

    <div>
      <Home/>
      <About/>
      <Services/>
      <PortFolio/>
      <Contact/>
      <FOOTER/>
    </div>
  )
}
