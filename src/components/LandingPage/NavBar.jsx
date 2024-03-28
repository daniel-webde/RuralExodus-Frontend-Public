import { Link } from 'react-router-dom';
import { useState } from "react";
import { FaAlignJustify, FaAlignRight } from "react-icons/fa";

const NavBar = () => {
    
    const [open, setOpen] = useState(false);

  return (
    <nav className=" bg-gray-900">
        <img src="logo.png" alt="logo" className="absolute hidden md:flex w-24 h-24 ml-20"/>
        <div className="md:ml-48 md:pt-3 py-3 md:py-0">
            <div className="flex justify-between w-full">
                {/* Heading */}
                <h1 className="text-md sm:text-2xl text-gray-100 uppercase font-semibold font-serif px-3 tracking-wider cursor-pointer">
                    Rural Exodus PROGRAMME
                </h1>

                {/* Mobile Menu Icon */}
                <div onClick={() => {setOpen(!open)}}>
                    <button> 
                        {
                         open ?  <FaAlignRight className="text-white size-5 mr-5 sm:hidden duration-500 z-50"/> : <FaAlignJustify className="text-white size-5 mr-5 sm:hidden duration-500"/> 
                        } 
                    </button>
                </div>
            </div>
            <div className="hidden sm:flex sm:justify-between">
                <ul className="uppercase font-montreal font-bold text-gray-100 text-sm flex">
                    <li className="px-3 py-2 hover:text-gray-300"><a href="">Who we are</a></li>
                    <li className="px-3 py-2 hover:text-gray-300"><a href="">What we do</a></li>
                    <li className="px-3 py-2 hover:text-gray-300"><a href="">Where we work</a></li>
                </ul>
                {/* <button className="bg-red-600 text-white font-serif font-semibold uppercase mr-20 px-4 py-2 hover:bg-red-800">Donate</button> */}
                    <Link 
                        to="/donate"
                        className="bg-red-600 text-white text-lg font-serif font-semibold uppercase mr-20 px-3 py-2 hover:bg-red-800"
                    >
                        Donate
                    </Link>
            </div>
        </div>

        {/* Mobile Nav */}
        <div className={`sm:hidden font-montreal absolute w-full sm:top-[6%] bg-gray-900 pl-3 duration-500 border-t-2 border-red-400 ${open ?' left-0 ': ' left-[-100%] '} `}>
            {/* Remove Background */}
            <img src="logo.png" alt="logo" className="w-20 h-20 mt-3 rounded mx-auto"/>
            <ul className="font-semibold text-gray-100 text-lg py-4 text-center">
                <li className="text-2xl uppercase py-2 hover:text-gray-500"><a href="">Who we are</a></li>
                <li className="text-2xl uppercase py-2 hover:text-gray-500"><a href="">What we do</a></li>
                <li className="text-2xl uppercase py-2 hover:text-gray-500"><a href="">Where we work</a></li>
            </ul>
            {/* <button className="flex mx-auto mb-5 px-4 py-2 bg-red-600 hover:bg-red-800 text-white text-lg font-serif font-semibold uppercase rounded-md shadow-md shadow-pink-400">Donate</button> */}
            <div className="flex justify-center">
                <Link 
                    to="/donate" 
                    className="mb-5 px-4 py-2 bg-red-600 hover:bg-red-800 text-white text-lg font-serif font-semibold uppercase rounded-md shadow-md shadow-pink-400"
                >
                    Donate
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default NavBar