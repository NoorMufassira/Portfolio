'use client';

import React from 'react';
import Link from 'next/link';
import Lottie from 'react-lottie-player';

const lottieUrl = '/Welcome.json';

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-r from-[#1f1235] to-[#0b0f20] text-white min-h-screen flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 z-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5 sm:space-y-6">
          <p className="text-pink-400 text-sm sm:text-base font-mono animate-fade-in">
            Hello, I’m
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight animate-slide-up">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-pink-400 via-white to-cyan-400 bg-clip-text text-transparent">
                Noor.
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-pink-400 opacity-80 animate-pulse rounded-full"></span>
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200 animate-slide-up">
            I innovate with code and
            <br className="hidden sm:inline" />
            shape digital experiences.
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 animate-fade-in delay-100">
            I am a skilled web developer and programmer, specializing in creating robust web applications with
            React.js, Next.js, Node.js, and TailwindCSS. Passionate about crafting efficient and user-friendly solutions.
          </p>

          <p className="text-pink-500 font-semibold text-sm sm:text-base animate-fade-in delay-200">
            Currently seeking new opportunities and freelance projects.
          </p>

          <Link
            href="#projects"
            className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-gray-100 transition duration-300 animate-fade-in delay-300"
          >
            View My Work
          </Link>
        </div>

        {/* Right: Lottie Animation */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in">
          <Lottie loop play path={lottieUrl} style={{ width: 350, height: 350 }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
