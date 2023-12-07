import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import Typed from "react-typed";

function Home() {
  return (
    <section className='max-[767px]:h-[50vh] max-[767px]:static'>
      <div className="heading absolute flex justify-center items-center h-full w-screen">
        <h1 className='text-center text-white text-9xl font-custom font-bold z-2 max-[767px]:text-6xl max-[767px]:-mt-20'>
        <Typed
            className=""
            strings={["Daksha 2.0"]}
            typeSpeed={80}
            backSpeed={90}
            loop
          />
        </h1>
      </div>
      <CCarousel controls indicators transition='crossfade' interval={1700} className='max-[767px]:'>
        <CCarouselItem>
          <CImage className="d-block h-screen w-screen max-[767px]:h-full" src="assets/wide1.jpg" alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block h-screen w-screen max-[767px]:h-full" src="assets/wide2.jpg" alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block h-screen w-screen max-[767px]:h-full" src="assets/wide1.jpg" alt="slide 3" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block h-screen w-screen max-[767px]:h-full" src="assets/wide2.jpg" alt="slide 2" />
        </CCarouselItem>
      </CCarousel>
      <div className='h-[15%] w-screen flex justify-center items-center'>
        <div className="register flex items-center justify-center relative h-[75%] w-[40%] mt-80 text-[#4F1271] font-bold rounded-md bg-[#FDE4B0] cursor-pointer min-[767px]:hidden">REGISTER NOW</div>
      </div>
    </section>
    
  )
}

export default Home
