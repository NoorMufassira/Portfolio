'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';

const aboutLottieUrl = '/Developer Front End.json';
const aboutLottieUrl1 = '/Software.json';
const aboutLottieUrl2 = '/M2JOJ1BVfY.json';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
            About Me
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300 font-sans leading-relaxed">
            Hello! I'm <strong>Noor</strong>, a passionate Full-Stack Developer crafting scalable and performant web applications with React, Next.js, and Node.js. I turn vision into reality through clean code and smart architecture.
          </p>
        </motion.div>

        {/* Section 1: Frontend Magic */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2 px-4 space-y-4 text-center md:text-left">
            <h3 className="text-3xl font-semibold font-heading text-pink-400">
              Frontend Magic
            </h3>
            <p className="text-gray-300 font-sans leading-relaxed">
              I bring interfaces to life with animations, responsive layouts, and seamless UX. Whether it's crafting landing pages or building full-blown SPAs, I deliver with attention to detail.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Lottie loop play path={aboutLottieUrl} className="w-full max-w-md h-auto" />
          </div>
        </motion.div>

        {/* Section 2: Full Stack */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center gap-10"
        >
          <div className="md:w-1/2 px-4 space-y-4 text-center md:text-left">
            <h3 className="text-3xl font-semibold font-heading text-blue-400">
              Full Stack Development
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-300 font-sans">
              {[
                'Responsive UIs with React & Next.js',
                'Robust server-side logic with Node.js',
                'Database design with PostgreSQL and MongoDB',
                'Styling with Tailwind CSS & utility-first design',
                'Type-safe codebases using TypeScript',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="transition duration-300 hover:text-white hover:pl-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Lottie loop play path={aboutLottieUrl2} className="w-full max-w-md h-auto" />
          </div>
        </motion.div>

        {/* Section 3: Software Dev */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2 px-4 space-y-4 text-center md:text-left">
            <h3 className="text-3xl font-semibold font-heading text-green-400">
              Software Development
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-300 font-sans">
              {[
                'Strong object-oriented programming principles',
                'Team collaboration with Git & version control',
                'PostgreSQL and MySQL database management',
                'Debugging, testing, and performance tuning',
                'Agile practices and SDLC implementation',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="transition duration-300 hover:text-white hover:pl-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Lottie loop play path={aboutLottieUrl1} className="w-full max-w-md h-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
