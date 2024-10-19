import { Facebook, Instagram, Twitter } from 'lucide-react';

// import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 mt-8 rounded-t-3xl text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Logo and Name */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl font-bold">Care4Poor</h1>
          <p className="text-gray-200">Making a difference together</p>
          {/* Address and Phone */}
          <p className="mt-2 text-gray-200">
            123 Helping Hands St, Compassion City, Earth
          </p>
          <p className="text-gray-200">Phone: (123) 456-7890</p>
        </div>

        {/* Center - Links */}
        {/* <div className="mb-4 md:mb-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center">
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/volunteer" className="hover:underline">
            Volunteer
          </Link>
          <Link href="/donate" className="hover:underline">
            Donate
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div> */}

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

      <div className="mt-8 pt-4 text-center">
        <p className="text-slate-100">&copy; 2024 Care4Poor. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
