import { Instagram } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#94ae81] sm:mt-8 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Side - Logo and Name */}
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bebas font-bold">Care4Poor</h1>
          <div className='flex flex-col text-gray-100 font-montserrat'>
            <p className="">
              Making a difference together
            </p>
            <Link href={'tel:7838295296'}>+91 78382 95296</Link>
            <Link href={'mailto:care4poor@gmail.com'}>care4poor@gmail.com</Link>
          </div>
        </div>

        {/* Center - Navigation Links */}
        <div className="text-center">
          <div className="space-y-2 sm:space-y-0 sm:space-x-6 font-montserrat">
            <Link href="/" className="hover:underline block sm:inline">
              Home
            </Link>
            <Link href="/about-us" className="hover:underline block sm:inline">
              About Us
            </Link>
            <Link href="/volunteer" className="hover:underline block sm:inline">
              Volunteer
            </Link>
            <Link href="/donate" className="hover:underline block sm:inline">
              Donate
            </Link>
            <Link href="/contact-us" className="hover:underline block sm:inline">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Side - Social Media Links */}
        <div className="flex justify-center space-x-6">
          <Link href="https://www.instagram.com/care4poor/profilecard/?igsh=MWU4bWxlMHp5cmYxdA==" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <Instagram className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <div className="mt-8 pt-4 text-center font-montserrat">
        <p className="text-slate-100">&copy; 2024 Care4Poor. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
