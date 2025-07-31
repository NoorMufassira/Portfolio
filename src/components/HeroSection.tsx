// src/components/HeroSection.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import Lottie from 'react-lottie-player';
// Use this if your Welcme.json is in public folder:
const lottieUrl = '/Welcome.json';

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden py-16" // Removed px from here
      data-aos="fade-in"
    >
      {/*
        MODIFIED LINE:
        - Removed 'container' class as 'max-w-6xl mx-auto px-4' effectively creates a similar container behavior.
        - Added 'max-w-6xl' to match the Navbar's container width.
        - Added 'px-4' to match the Navbar's general horizontal padding (from its parent 'p-4').
        - The 'z-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-16' remain for layout.
      */}
      <div className="max-w-6xl mx-auto px-1 z-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-16">
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left md:w-1/2" data-aos="fade-right" data-aos-delay="200">
          {/* Ensure font-heading is applied to your h1 */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 font-heading">
            Hi, I'm Noor
          </h1>
          {/* Ensure font-sans is applied to your p tag */}
          <p className="text-xl sm:text-2xl mb-8 font-sans">
            I'm a Full Stack Developer, Exploring the World of Code
          </p>
          <Link
           href="#projects"
           className="inline-block bg-white hover:bg-white text-gray-800 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
           >
            View My Work
           </Link>
        </div>

        {/* Right Side: Lottie Animation */}
        <div className="md:w-1/2 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="400">
          <Lottie
            loop
            path={lottieUrl} // Using the path prop
            play
            style={{ width: 500, height: 500 }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
