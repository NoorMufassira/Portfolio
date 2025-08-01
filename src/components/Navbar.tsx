'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('skills'); // Default active item

  const handleLinkClick = (section: string) => {
    setIsOpen(false);
    setActive(section);
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#1f1235] to-[#0b0f20] p-4 fixed w-full z-50 top-0 shadow-lg">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <Link href="/" onClick={() => handleLinkClick('home')}>
          <span className="text-pink-500 text-2xl font-extrabold font-mono tracking-wide">
            {'{'} <span className="text-white">NOOR</span> {'}'}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 font-sans">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => handleLinkClick(item.name.toLowerCase())}
              className={`relative group px-2 py-1 text-gray-300 transition-all duration-300 ease-in-out ${
                active === item.name.toLowerCase()
                  ? 'border border-dashed border-pink-500 text-white rounded-sm'
                  : ''
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-pink-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          ))}

          {/* CV Button */}
          <Link
            href="/cv.pdf"
            target="_blank"
            className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition px-3 py-1 rounded-sm"
          >
            CV
          </Link>

          {/* Dark Mode Icon */}
          <button className="ml-3 text-gray-400 hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 4.222l-.707.707M21 12h-1M4 12H3m16.071 4.243l-.707-.707M6.343 6.343l-.707-.707"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
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
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-gray-800 py-2 space-y-2 px-4 rounded-md shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => handleLinkClick(item.name.toLowerCase())}
              className="block text-white hover:text-pink-400 transition"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/cv.pdf"
            target="_blank"
            className="block text-pink-500 hover:text-white transition"
          >
            CV
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
