// src/components/Navbar.tsx

'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <nav className="bg-gray-900 p-4 fixed w-full z-20 top-0 shadow-lg"> {/* Added shadow-lg for subtle depth */}
      <div className="container mx-auto flex justify-between items-center max-w-6xl"> {/* Added container, mx-auto, max-w-6xl */}
        {/* Your Name/Logo - Applied font-heading */}
        <Link href="/" className="text-white text-2xl font-bold font-heading" onClick={handleLinkClick}>
          [Noor]
        </Link>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links - Applied font-sans and enhanced hover effect */}
        <div className="hidden md:flex space-x-8"> {/* Adjusted space-x to 8 for more separation if desired, you can use 6 or 7 too */}
          <Link href="#about" className="text-white font-semibold text-1xl hover:text-white hover:translate-y-1 transition duration-200 font-sans" onClick={handleLinkClick}>About</Link>
          <Link href="#about" className="text-white font-semibold text-1xl hover:text-white hover:translate-y-1 transition duration-200 font-sans" onClick={handleLinkClick}>Skills</Link>
          <Link href="#experience" className="text-white font-semibold text-1xl hover:text-white hover:translate-y-1 transition duration-200 font-sans" onClick={handleLinkClick}>Experience</Link>
          <Link href="#projects" className="text-white font-semibold text-1xl hover:text-white hover:translate-y-1 transition duration-200 font-sans" onClick={handleLinkClick}>Projects</Link>
          <Link href="#contact" className="text-white font-semibold text-1xl hover:text-white hover:translate-y-1  transition duration-200 font-sans" onClick={handleLinkClick}>Contact Me</Link>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) - Applied font-sans */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 mt-2 rounded-md shadow-lg py-2">
          <Link href="#about" className="block px-4 py-2 text-white hover:bg-gray-600 font-sans " onClick={handleLinkClick}>About</Link>
          <Link href="#skills" className="block px-4 py-2 text-white hover:bg-gray-600 font-sans" onClick={handleLinkClick}>Skills</Link>
          <Link href="#experience" className="block px-4 py-2 text-white hover:bg-gray-600 font-sans" onClick={handleLinkClick}>Experience</Link>
          <Link href="#projects" className="block px-4 py-2 text-white hover:bg-gray-600 font-sans" onClick={handleLinkClick}>Projects</Link>
          <Link href="#contact" className="block px-4 py-2 text-white hover:bg-gray-600 font-sans" onClick={handleLinkClick}>Contact Me</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
