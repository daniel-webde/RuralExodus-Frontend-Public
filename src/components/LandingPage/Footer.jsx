import { useState } from "react";
import { FaSignInAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";


const Footer = () => {

    // Handle <hr/> for the columns 
    const [isHovered, setIsHovered] = useState(null);
    const handleMouseEnter =(index) => {
        setIsHovered(index);
    };
    const handleMouseLeave = () => {
        setIsHovered(null);
    };


  return (
    <footer className=" bg-gray-600 px-4 sm:px-24 pt-6 ">
        <h1 className=" text-3xl sm:text-2xl lg:text-4xl  text-gray-100 uppercase lg:font-thin font-montreal tracking-wide sm:pb-6 flex items-center">
            <img src="rural_exosus_programme_logo-removebg.png" alt="" className="size-20" /> Rural Exodus
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 sm:gap-5 font-sans">
            {/* 1st Column */}
            <div 
                className="pt-4 col-span-2 sm:col-span-1"
                onMouseEnter={() => handleMouseEnter(0)} 
                onMouseLeave={handleMouseLeave}
            >
                <h2 className="text-white font-bold tracking-wider uppercase md:hover:tracking-widest duration-500">
                    Our Goal
                </h2>
                <hr className={isHovered === 0 ? 'w-full duration-500 border-t-4 border-red-400' : 'w-16 border-t-4 border-red-400 duration-500'} />
                <p className="text-sm text-gray-200 sm:pt-2  hover:text-gray-50">Our Goals is to ameliorate the dire situation most of Rural Communities find themselves in by empowering them to become self-sufficient through active participation in an income generating activities.</p>
            </div>

            {/* 2nd Column  */}
            <div 
                className="w-36 sm:w-38 pt-4 sm:pl-8"
                onMouseEnter={() => handleMouseEnter(1)} 
                onMouseLeave={handleMouseLeave}
            >
                <h2 className="text-white font-bold tracking-wider uppercase md:hover:tracking-widest duration-500">
                    Sections
                </h2>
                <hr className={isHovered === 1 ? 'w-full duration-500 border-t-4 border-red-400' : 'w-16 border-t-4 border-red-400 duration-500'} />
                <ul className="text-gray-200 sm:pt-2 text-sm">
                    <li className="sm:py-1 hover:font-semibold hover:text-gray-100">
                        <a href="/">Who We Are</a>
                    </li>
                    <li className="sm:py-1 hover:font-semibold hover:text-gray-100">
                        <a href="/">What We Do</a>
                    </li>
                    <li className="sm:py-1 hover:font-semibold hover:text-gray-100">
                        <a href="/">Where We Work</a>
                    </li>
                </ul>
            </div>

            {/* 3rd Column  spans 2 cols*/}
            <div 
                className="pt-4 sm:mr-11"
                onMouseEnter={() => handleMouseEnter(2)} 
                onMouseLeave={handleMouseLeave}
            >
                <h2 className="text-white font-bold tracking-wider uppercase md:hover:tracking-widest duration-500">
                    Work With Us
                </h2>
                <hr className={isHovered === 2 ? 'w-full duration-500 border-t-4 border-red-400' : 'w-16 border-t-4 border-red-400 duration-500'} />
                <ul className="text-gray-200 sm:pt-2 text-sm">
                    <li className="sm:py-1 hover:font-semibold hover:text-gray-100">
                        <a href="/">Career</a>
                    </li>
                    <li className="sm:py-1 hover:font-semibold hover:text-gray-100">
                        <a href="/">Internship</a>
                    </li>
                    <li className="sm:py-1 hover:font-semibold hover:text-gray-100">
                        <a href="/">Open Tendor</a>
                    </li>
                </ul>
            </div>
            <div className="lg:col-span-2 md:col-span-3 col-span-2 mt-5">
                <p className="text-white font-bold uppercase md:hover:tracking-wide duration-500">Get Our NewsLetter</p>
                <div className="flex h-10 md:mt-3 mt-1">
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="peer border text-white font-semibold text-md rounded w-full ps-6 bg-transparent peer-placeholder-shown:text-sm
                                    focus:outline-none focus:animate-none focus:shadow-md focus:shadow-gray-400 focus:bg-gray-500 animate-pulse"
                    />
                    {/* <FaSignInAlt 
                        className="absolute lg:right-28 md:right-28 sm:right-28  right-12 lg:top-[8.7rem] bottom-[7.5rem]
                                 text-gray-300 size-6 items-center transition-all
                                   focus:opacity-[0.85] focus:shadow-none cursor-pointer hover:text-red-400 focus:text-red-200"
                    /> */}
                </div>

                {/* Socials */}
                <p className="text-white font-bold uppercase md:hover:tracking-wide duration-500 pt-4">Conect with us</p>
                <ul className="flex">
                    <li className="hover:animate-bounce p-2">
                        <a href="">
                            <FaFacebook className="text-gray-200 size-9 rounded-full shadow-sm hover:shadow-lg hover:shadow-gray-800"/>
                        </a>
                    </li>
                    <li className="hover:animate-bounce p-2">
                        <a href="">
                            <FaInstagram className="size-9 p-1 rounded-full text-gray-600  bg-gray-200 hover:shadow-lg hover:shadow-gray-800"/>
                        </a>
                    </li>
                    <li className="hover:animate-bounce p-2">
                        <a href="">
                            <FaXTwitter className="size-9 p-1 rounded-full text-gray-600  bg-gray-200 hover:shadow-lg hover:shadow-gray-800"/>
                        </a>
                    </li>
                    <li className="hover:animate-bounce p-2">
                        <a href="https://www.linkedin.com/company/rural-exodus-programme">
                            <RiLinkedinFill className="size-9 p-1 rounded-full text-gray-600  bg-gray-200 hover:shadow-lg hover:shadow-gray-800"/>
                        </a>
                    </li>
                    <li className="hover:animate-bounce p-2">
                        <a href="https://youtube.com/@ruralexodusprogram?si=4L9mr9GKYw8vCrvH">
                            <AiOutlineYoutube className="size-9 p-1 rounded-full text-gray-600  bg-gray-200 hover:shadow-lg hover:shadow-gray-800" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="container mx-auto text-xs text-center text-gray-400 pt-5 pb-2">
            &copy; {new Date().getFullYear()} Rural Exodus. All Rights Reserved.
        </div>
    </footer>
  )
}

export default Footer