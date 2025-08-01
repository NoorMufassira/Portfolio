'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Github } from 'lucide-react'; // Optional: Use icons if lucide-react is installed

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4 sm:px-8"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 relative inline-block after:block after:w-24 after:h-1 after:bg-pink-500 after:mx-auto after:mt-2">
          Get In Touch
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-xl mx-auto">
          Interested in collaborating or just want to say hi? Feel free to contact me through the platforms below.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          {/* Email */}
          <Link
            href="mailto:hassanlive1231@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" /> Email Me
          </Link>

          {/* LinkedIn */}
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/Noor-Mufassira"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5" /> GitHub
          </Link>
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Noor. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
