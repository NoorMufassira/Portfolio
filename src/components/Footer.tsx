// src/components/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white pt-12 pb-8 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-pulse" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center space-y-6">

        {/* Social icons */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* GitHub */}
          <Link
            href="https://github.com/Noor-Mufassira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="transition-all duration-300 transform hover:scale-110 hover:text-pink-400"
          >
            <svg className="w-7 h-7 fill-current text-gray-400 hover:text-white" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                0-.237-.008-.866-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.913-.618.069-.606.069-.606
                1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.831.091-.645.356-1.088.649-1.336-2.224-.251-4.555-1.112-4.555-4.93
                0-1.088.39-1.979 1.029-2.671-.103-.251-.446-1.265.098-2.647 0 0 .84-.268 2.75 1.022A9.615 9.615 0 0112 5.844c.85.004 1.7.11 2.5.324
                1.909-1.29 2.747-1.022 2.747-1.022.546 1.382.202 2.396.1 2.647.64.692 1.028 1.583 1.028 2.671
                0 3.827-2.333 4.675-4.562 4.922.357.307.676.917.676 1.85 0 1.335-.012 2.41-.012 2.727
                0 .266.18.59.687.482C19.14 20.218 22 16.463 22 12.017 22 6.484 17.523 2 12 2z"
              />
            </svg>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="transition-all duration-300 transform hover:scale-110 hover:text-blue-400"
          >
            <svg className="w-7 h-7 fill-current text-gray-400 hover:text-white" viewBox="0 0 24 24">
              <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zm-11 19H5V8h3v11zm-1.5-12.268C5.534 6.732 4.75 5.942 4.75 5s.784-1.764 1.75-1.764S8.25 4.058 8.25 5s-.783 1.732-1.75 1.732zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
            </svg>
          </Link>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-700 my-4" />

        {/* Footer Text */}
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Noor Mufassira. Crafted with 💻 + ☕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
