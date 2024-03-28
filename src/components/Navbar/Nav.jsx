import React, { useState } from 'react';
// import NavLinks from './NavLinks'; // Assuming NavLinks.js is where you've defined your data structure

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);

  const handleMenuHover = (index) => {
    setSelectedMenuIndex(index);
    setIsDropdownOpen(true);
  };

  const handleMenuLeave = () => {
    setIsDropdownOpen(false);
    setSelectedMenuIndex(null);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand/logo */}
        <a className="text-xl font-bold" href="#">Your Logo</a>

        {/* Navbar links */}
        <ul className="hidden md:flex space-x-4">
          {NavLinks.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleMenuHover(index)}
              onMouseLeave={handleMenuLeave}
            >
              <a href={item.link} className="ml-4">{item.menu}</a>
              {index === selectedMenuIndex && isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-gray-800 text-white rounded-md p-4">
                  <ul>
                    {item.submenu.map((subitem, subindex) => (
                      <li key={subindex}>
                        <a href={subitem.link}>{subitem.menu}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
