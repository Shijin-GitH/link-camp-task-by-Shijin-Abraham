import React, { useState } from 'react';
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`absolute z-3 w-screen max-[767px]:relative max-[767px]:bg-[#000] ${isOpen?"h-fit":"h-[14vh]"}`}>
      <nav className="h-full">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          <div className="flex w-screen h-full justify-between items-center">
            <div className="flex-shrink-0">
              <img className={`h-10 ${isOpen? 'mt-10':''}`} src="assets/ieee_sb_cec_logo_white.png" alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline">
                <a href="#" className="text-white hover:text-gray-300 py-2 rounded-md text-base font-medium no-underline">HOME</a>
                <a href="#about" className="text-white hover:text-gray-300 py-2 rounded-md text-base font-medium no-underline">ABOUT</a>
                <a href="#events" className="text-white hover:text-gray-300 py-2 rounded-md text-base font-medium no-underline">EVENTS</a>
                <a href="#contact" className="text-white hover:text-gray-300 py-2 rounded-md text-base font-medium no-underline">CONTACT</a>
              </div>
            </div>
            <div className="register flex items-center justify-center h-[35%] w-[8%] text-[#4F1271] font-bold rounded-md bg-[#FDE4B0] cursor-pointer max-[767px]:hidden">REGISTER</div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} type="button" className={`bg-[#FDE4B0] inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ${isOpen ? 'mt-10':''}`}>
              <span className="sr-only">Open main menu</span>
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3  sm:px-3 flex flex-col items-center space-y-6">
          <a href="#" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium mt-5">Home</a>
          <a href="#about" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#events" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Events</a>
          <a href="#contact" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
    </nav>
  );
}

export default Navbar;
