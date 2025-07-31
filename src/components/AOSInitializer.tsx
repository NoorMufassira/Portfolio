// src/components/AOSInitializer.tsx
'use client'; // This component MUST be a client component

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS

const AOSInitializer: React.FC = () => {
 useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
  });
  AOS.refresh();
}, []);

  return null; // This component doesn't render any UI
};

export default AOSInitializer;