import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Media = () => {


  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };
  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <>
      <div className="grid sm:grid-cols-3 font-montreal px-6 py-8 sm:py-12">
        <div className="hover:shadow-lg p-4" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
          <h2 className={isHovered === 0? "text-red-600 text-xl font-bold pb-2": "text-black text-xl font-bold pb-2"}>Learn About Us</h2>
          <hr className='w-16 border-t-4 border-red-600 py-1'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, numquam!</p>
        </div>
        <div className="hover:shadow-lg p-4" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
          <h2 className={isHovered === 1? "text-red-600 text-xl font-bold pb-2": "text-black text-xl font-bold pb-2"}>Work With Us</h2>
          <hr className='w-16 border-t-4 border-red-600 py-1'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, numquam!</p>
        </div>
        <div className="hover:shadow-lg p-4" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
          <h2 className={isHovered === 2? "text-red-600 text-xl font-bold pb-2": "text-black text-xl font-bold pb-2"}>Support Us</h2>
          <hr className='w-16 border-t-4 border-red-600 py-1'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, numquam!</p>
        </div>
      </div>

      {/* Mobile Donation Button */}
      <div className="sm:hidden">
        <hr className='mx-auto bg-gray-400 border-0 rounded-full w-3 h-1 my-2'/>
        {/* <button className='bg-red-300 animate-pulse text-red-600 font-bold font-montreal px-4 py-2 rounded flex justify-center mx-auto tracking-wider border hover:border-red-500 hover:animate-none'>DONATE</button> */}
        <Link to="/donate" className='bg-red-600 text-red-200 font-extrabold text-lg py-2 rounded tracking-wider flex justify-center mx-32 shadow-lg shadow-gray-500'>DONATE</Link>
        <hr className='mx-auto bg-white border-0 rounded-full w-3 h-1 my-2'/>
      </div>

      {/* Media Content */}
      <div className='py-7'>
        <h2 className='text-center font-montreal text-4xl font-semibold'>Media</h2>
        {/* News on Rural Exodus Programme */}
        <div className="lg:px-28 py-6 font-montreal">
          <iframe 
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7033328289477705728" 
              
              frameBorder="0" allowFullScreen="" title="Embedded post"
              className="rounded hover:shadow-lg w-full h-96 hover:shadow-gray-500"
          ></iframe>
          
        </div>
      </div>
    </>

  )
}

export default Media;