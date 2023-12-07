import React from 'react'

function About() {
  return (
    <div className='w-screen h-[fit] overflow-x-hidden' id='about'>
          <div className="heading p-5 text-[#FDE4B0] text-7xl font-custom font-semibold" data-aos="fade-right" data-aos-duration="1000">What is Daksha?</div>
          <div className="answer h-[50%] w-[60%] text-xl text-[#FDE4B0] text-justify ml-36 font-semibold max-[767px]:ml-5 max-[767px]:w-[90%] max-[767px]:flex max-[767px]:justify-center max-[767px]:items-center max-[767px]:px-5" data-aos="fade-left" data-aos-duration="1000">Daksha is a two-day all kerala technical event powered by IEEE Women In Engineering Affinity Group, College of Engineering Chengannur. The event, being a Technical Colloquium for both girls and boys, focuses on escalating their technical expertise and enabling networking and socializing with fellow participants from various engineering colleges across Kerala. The program looks forward to building a trailblazing platform for the student leaders to interact across regions to share their knowledge, find their best applications, cultivate different ideas and much more.</div>
    </div>
  )
}

export default About
