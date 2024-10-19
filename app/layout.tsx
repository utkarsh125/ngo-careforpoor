import './globals.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark min-h-screen flex flex-col">
        {/* Container for Navbar, Content, and Footer */}
        <div className="flex-grow">
          <Navbar />
          <div className="container mx-auto px-0 sm:px-4 lg:px-8">
            <main>{children}</main>
          </div>
        </div>
        
        {/* Footer always at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
