import React from 'react'

function Contact() {
  return (
    <div className='Contact w-screen h-[50vh] bg-gradient-to-b from-[transparent] to-[#000] max-[767px]:h-[25vh]' id='contact'>
      <div className="logo  flex justify-center items-center  w-full h-full" data-aos="zoom-in" data-aos-duration="1000">
        <img src="assets/daksha name.webp" alt="" className='w-[50%]' />
      </div>
      <div className="social flex justify-between px-[30%] py-[2%] bg-[#000]">
        <i className='fa fa-instagram text-3xl text-[#FDE480] cursor-pointer'></i>
        <i className='fa fa-facebook text-3xl text-[#FDE480] cursor-pointer'></i>
        <i className='fa fa-linkedin text-3xl text-[#FDE480] cursor-pointer'></i>
        <i className='fa fa-whatsapp text-3xl text-[#FDE480] cursor-pointer'></i>
      </div>
    </div>
  )
}

export default Contact
