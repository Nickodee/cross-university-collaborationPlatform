import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";


function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className='min-h-screen overflow-hidden'>
        {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className='absolute object-cover w-full h-full'
        style={{ zIndex: -1 }}
      >
        <source src='cross-university-collaborationPlatform\cusip\assets\bg-video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <nav className=" bg-red-400 w-full  fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl font-bold ">CUSIP</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <IoIosClose />
                  ) : (
                    <FaBars />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0">
                  <Link href="#post" className='hover:text-[#2dabb1]' onClick={() => setNavbar(!navbar)}>
                    POST
                  </Link>
                </li>
                <li className="pb-6  py-2 px-6 text-center  border-b-2 md:border-b-0 ">
                  <Link href="#joincommunity" onClick={() => setNavbar(!navbar)}>
                    <button className='p-2 border-2 border-[#2dabb1] hover:bg-[#2dabb1] hover:text-white'>JOIN OUR COMMUNITY</button>
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section>
      <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-4xl">We Connect University</h1>
          <h1 className="text-4xl">Students & Allow Project Collaboration</h1>
          <p className="mt-3">Join a community of like-minded students, connect & collaborate in projects</p>
          <button className="mt-3 border-2 border-[#2dabb1] p-2 hover:bg-[#2dabb1]  hover:text-white">
            Join Our Community
          </button>
        </div>
      </section>
    </div>
  );
}

export default NavBar;