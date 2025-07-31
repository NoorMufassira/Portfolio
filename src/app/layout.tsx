// src/app/layout.tsx
import './globals.css';
import AOSInitializer from '../components/AOSInitializer'; // Add this import

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AOSInitializer /> {/* This line */}
        {children}
      </body>
    </html>
  );
}