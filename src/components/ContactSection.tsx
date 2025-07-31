// src/components/ContactSection.tsx

import React from 'react';
import Link from 'next/link'; // For external links

const ContactSection: React.FC = () => {
 return (
    <section id="contact" className="bg-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up"> {/* Added data-aos */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg leading-relaxed mb-8">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
          {/* Email Link */}
          <Link
            href="mailto:hassanlive1231@gmail.com" // Replace with your actual email address
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Email Me
          </Link>

          {/* LinkedIn Link */}
          <Link
            href="#" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            LinkedIn Profile
          </Link>

          {/* GitHub Link */}
          <Link
            href="https://github.com/Noor-Mufassira" // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            GitHub Profile
          </Link>
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Hassan. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;