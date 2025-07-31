// src/components/AboutSection.tsx

'use client'; // Essential for using React Hooks like Lottie

import React from 'react';
import Lottie from 'react-lottie-player';

// Your specified Lottie JSON file path
// Make sure 'Developer Front End.json' is in your 'public' folder.
const aboutLottieUrl = '/Developer Front End.json';
const aboutLottieUrl1= '/Software.json';
const aboutLottieUrl2= '/M2JOJ1BVfY.json';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center"> {/* Main container for the section content */}

        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-6 font-heading">About Me </h2>

        {/* NEW LAYOUT BLOCK: This div creates the row for the introductory paragraph (left) and Lottie (right) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"> {/* Added mb-12 for spacing below this section */}

          {/* Left Side: Introductory Paragraph */}
          <div className="md:w-1/2 text-center p-10  md:text-left">
            <p className="text-lg leading-loose font-sans">
              Hello! I'm Hassan, a passionate Full-Stack Developer specializing in creating robust web applications with technologies like React.js, Next.js, Node.js, and Tailwind CSS. I thrive on bringing ideas to life through clean code and innovative solutions. My journey in web development has equipped me with a diverse skill set, allowing me to tackle challenges from front-end design to back-end logic.
            </p>
          </div>

          {/* Right Side: Lottie Animation, aligned with the paragraph */}
          <div className="md:w-1/2 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="200">
            <Lottie
              loop
              path={aboutLottieUrl}
              play
              // Responsive sizing for the Lottie animation. Adjust max-w-sm if it's too big/small.
              className="w-full max-w-sm h-auto" // max-w-sm is 24rem (384px) by default in Tailwind
            />
          </div>
        </div>
       <h2 className="text-4xl font-bold mb-6 font-heading">What I Do</h2>

{/* Flex container for the two-column layout */}
<div className="flex flex-col md:flex-row items-center md:items-start gap-8">
  {/* Left Side: My Expertise Section */}
  <div className="md:w-1/2 text-left p-23">
    <h3 className="text-3xl font-semibold mb-4 font-heading">
      Full Stack Development
    </h3>
    <ul className="list-disc list-inside space-y-5 text-white font-sans">
      <li>Building responsive and dynamic user interfaces with React and Next.js.</li>
      <li>Developing robust server-side applications with Node.js.</li>
      <li>Managing databases like PostgreSQL and MongoDB.</li>
      <li>Crafting beautiful and functional designs with Tailwind CSS.</li>
      <li>Implementing clean and maintainable code with TypeScript.</li>
    </ul>
  </div>

  {/* Right Side: Lottie Animation */}
  <div className="md:w-1/2 p-15 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="200">
    <Lottie
      loop
      path={aboutLottieUrl2}
      play
      className="w-full max-w-sm h-auto"
    />
  </div>
</div>
        {/* Flex container for the two-column layout */}
<div className="flex flex-col md:flex-row items-center md:items-start gap-8">
  {/* Left Side: My Expertise Section */}
  <div className="md:w-1/2 text-left p-23">
    <h3 className="text-3xl font-semibold mb-4 font-heading">
      Software Development
    </h3>
    <ul className="list-disc list-inside space-y-5 text-white font-sans">
      <li>Solid proficiency in object-oriented programming (OOP) and software design principles</li>
      <li>Leverages Git for robust version control and team collaboration</li>
      <li>Managing databases like PostgreSQL and MYSQL.</li>
      <li>System Debugging, Testing, and Performance Optimization</li>
      <li>Implementation through software development methods and principles</li>
    </ul>
  </div>

  {/* Right Side: Lottie Animation */}
  <div className="md:w-1/2 p-15 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="200">
    <Lottie
      loop
      path={aboutLottieUrl1}
      play
      className="w-full max-w-sm h-auto"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default AboutSection;