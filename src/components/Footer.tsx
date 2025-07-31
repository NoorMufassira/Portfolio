// src/components/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Social Media Links (Optional - customize or remove) */}
        <div className="flex space-x-6 mb-4">
          <Link
            href="https://github.com/Noor-Mufassira" // GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110" // Added hover effects
            aria-label="GitHub Profile"
          >
            {/* Simple GitHub Icon (SVG) */}
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.913-.618.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.831.091-.645.356-1.088.649-1.336-2.224-.251-4.555-1.112-4.555-4.93 0-1.088.39-1.979 1.029-2.671-.103-.251-.446-1.265.098-2.647 0 0 .84-.268 2.75 1.022A9.615 9.615 0 0112 5.844c.85.004 1.7.11 2.5.324 1.909-1.29 2.747-1.022 2.747-1.022.546 1.382.202 2.396.1 2.647.64.692 1.028 1.583 1.028 2.671 0 3.827-2.333 4.675-4.562 4.922.357.307.676.917.676 1.85 0 1.335-.012 2.41-.012 2.727 0 .266.18.59.687.482C19.14 20.218 22 16.463 22 12.017 22 6.484 17.523 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            href="#" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110" // Added hover effects
            aria-label="LinkedIn Profile"
          >
            {/* Simple LinkedIn Icon (SVG) */}
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </Link>
          {/* Add more social media links/icons as needed */}
        </div>

        <p className="text-sm text-gray-400">
          &copy; {currentYear} Hassan. All rights reserved.
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;
