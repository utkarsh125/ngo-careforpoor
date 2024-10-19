// app/layout.tsx

import './globals.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
