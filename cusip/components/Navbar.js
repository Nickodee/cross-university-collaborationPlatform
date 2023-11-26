import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import videoBg from '../assets/bg-video.mp4'
import { IoChatbubblesOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";





function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className='min-h-screen overflow-hidden'>
        {/* Video Background */}
        <video className='absolute top-0 left-0 object-cover w-full h-full z-index:-1' autoPlay muted loop>
          <source src={videoBg} type="video/mp4" />
        </video>
      <nav className=" bg-white w-full  fixed top-0 left-0 right-0 z-20 shadow-xl ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl font-bold font-serif ">CUSIP</h2>
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
                  <Link href="/SignUp" onClick={() => setNavbar(!navbar)}>
                    <button className='p-2 border-2 border-[#2dabb1] hover:bg-[#2dabb1] hover:text-white'>JOIN OUR COMMUNITY</button>
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section className='relative z-10'>
      <div className="flex flex-col justify-center items-center h-screen md:text-xl text-center">
          <h1 className="text-4xl text-white">We Connect University</h1>
          <h1 className="text-4xl text-white">Students & Allow Project Collaboration</h1>
          <p className="mt-3 text-white">Join a community of like-minded students, connect & collaborate in projects</p>
          <button className="mt-3 border-2 border-[#2dabb1] p-2 hover:bg-[#2dabb1]  hover:text-white">
            Join Our Community
          </button>
        </div>
      </section>
      <button
      className={`fixed flex gap-1 justify-center items-center bottom-4 right-6 p-2 z-20 text-white ${
        isClicked ? 'rounded-full' : 'rounded'
      } ${isClicked ? 'bg-[#2dabb1]' : 'bg-green-500'} ${isClicked ? 'shadow-xl' : ''}`}
      onClick={handleClick}
    >
      <IoChatbubblesOutline />
      {isClicked ? null : 'Chat with Us'}
    </button>
    {isClicked && (
        <div className="fixed bg-white overflow-hidden p-2 h-[400px] w-[300px] border-2 border-[#2dabb1] rounded-md shadow-xl bottom-16 right-6 z-30">
          {/* Content of the opened div goes here */}
          <div className='text-center border-b border-gray-300 border-1 text-[#2dabb1]'>Chat with CUSIP</div>
          <div className='h-[300px] overflow-hidden overflow-y-scroll '>Text here
          </div>
          <div className='flex font-bold p-1 gap-2 items-center border border-1 border-black  pr-1'>
            <input type='text'className='outline-none w-full'/>
            <button><FiSend className='text-[#2dabb1]'/></button>
          </div>
          <p className='text-[10px] text-center mt-2 bottom-2'>powered by <span className='text-[#2dabb1]'>cusip.ai</span></p>
        </div>
      )}
    </div>
  );
}

export default NavBar;