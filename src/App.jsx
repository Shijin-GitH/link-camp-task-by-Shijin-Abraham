import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Timer from './Components/Timer/Timer'
import EventDetails from './Pages/EventDetails/EventDetails'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
  
function App() {

  return (
    <div className='App bg-[url(assets/BG3.png)] bg-no-repeat bg-cover bg-center'>
      <header>
        <Navbar />
      </header>
      <section>
        <Home />
        <Timer />
        <About />
      </section>
      <EventDetails />
      <Contact />
    </div>
  )
}

export default App
