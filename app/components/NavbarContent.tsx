// app/components/NavbarContent.tsx (Client Component)
"use client";

import { ChevronDown, Menu, X } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const NavbarContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-transparent text-gray-900 font-bebas text-2xl lg:text-2xl">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/c4plogo.png" alt="CARE4POOR Logo" width={70} height={70} className="h-auto w-auto" />
        <span className="text-2xl font-bold text-lime-500 tracking-tight">CARE4POOR</span>
      </div>

      {/* Desktop Navigation Links and Donate Button */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 font-semibold">
        <Link href="/">
          <span className="hover:text-lime-500 cursor-pointer tracking-tight">HOME</span>
        </Link>
        <Link href="/about-us">
          <span className="hover:text-lime-500 cursor-pointer tracking-tight">ABOUT US</span>
        </Link>

        {/* Dropdown for Programs */}
        <div className="relative">
          <button onClick={toggleDropdown} className="hover:text-lime-500 cursor-pointer tracking-tight flex items-center">
            PROGRAMS
            <ChevronDown className="ml-1" />
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white text-gray-900 p-2 rounded shadow-lg z-20">
              <Link href="/programs/score4change">
                <span className="block px-4 py-2 hover:text-lime-500">Score4Change</span>
              </Link>
              <Link href="/programs/debate4change">
                <span className="block px-4 py-2 hover:text-lime-500">Debate4Change</span>
              </Link>
            </div>
          )}
        </div>

        <Link href="/events">
          <span className="hover:text-lime-500 cursor-pointer tracking-tight">EVENTS</span>
        </Link>
        
        <Link href="/volunteer" className="hidden lg:inline">
          <span className="hover:text-lime-500 cursor-pointer tracking-tight">VOLUNTEER</span>
        </Link>
        <Link href="/contact-us" className="hidden lg:inline">
          <span className="hover:text-lime-500 cursor-pointer tracking-tight">CONTACT US</span>
        </Link>

        <Link href="/donate">
          <button className="px-4 py-2 bg-lime-500 text-black font-bold rounded-full hover:text-white hover:bg-lime-600 transition duration-300">
            DONATE
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 w-full bg-white text-gray-900 font-bebas text-2xl p-4 shadow-lg flex flex-col space-y-4 z-10">
          <Link href="/">
            <span className="hover:text-lime-500 cursor-pointer tracking-tight">HOME</span>
          </Link>
          <Link href="/about-us">
            <span className="hover:text-lime-500 cursor-pointer tracking-tight">ABOUT US</span>
          </Link>
          <div className="relative">
            <button onClick={toggleDropdown} className="hover:text-lime-500 cursor-pointer tracking-tight flex items-center">
              PROGRAMS
              <ChevronDown className="ml-1 text-2xl" />
            </button>
            {dropdownOpen && (
              <div className="mt-2 bg-white text-gray-900 p-2 rounded shadow-lg z-20">
                <Link href="/programs/score4change">
                  <span className="block px-4 py-2 hover:text-lime-500">Score4Change</span>
                </Link>
                <Link href="/programs/debate4change">
                  <span className="block px-4 py-2 hover:text-lime-500">Debate4Change</span>
                </Link>
              </div>
            )}
          </div>
          <Link href="/events">
            <span className="hover:text-lime-500 cursor-pointer tracking-tight">EVENTS</span>
          </Link>
          <Link href="/volunteer">
            <span className="hover:text-lime-500 cursor-pointer tracking-tight">VOLUNTEER</span>
          </Link>
          <Link href="/contact-us">
            <span className="hover:text-lime-500 cursor-pointer tracking-tight">CONTACT US</span>
          </Link>
          <Link href="/donate">
            <button className="w-full py-2 bg-lime-500 text-black font-bold rounded-full hover:text-white hover:bg-lime-600 transition duration-300">
              DONATE
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarContent;
