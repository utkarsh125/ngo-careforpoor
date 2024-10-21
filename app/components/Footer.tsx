import { Facebook, Instagram, Twitter } from 'lucide-react';

import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#94ae81] mt-8 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Logo and Name */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl font-bebas font-bold">Care4Poor</h1>
          <p className="text-gray-200 font-montserrat">Making a difference together</p>
        </div>

        {/* Center - Navigation Links */}
        <div className="mb-4 md:mb-0 text-center">
          <div className="space-x-6 font-montserrat">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about-us" className="hover:underline">
              About Us
            </Link>
            <Link href="/volunteer" className="hover:underline">
              Volunteer
            </Link>
            <Link href="/donate" className="hover:underline">
              Donate
            </Link>
            <Link href="/contact-us" className="hover:underline">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Side - Social Media Links */}
        <div className="flex space-x-6 text-center">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="mt-8 pt-4 text-center font-montserrat">
        <p className="text-slate-100">&copy; 2024 Care4Poor. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
