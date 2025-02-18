"use client";

import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

const NavbarContent: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  // const router = useRouter();

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (): void => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (mounted) {
      const handleRouteChange = (): void => {
        closeMenu();
      };
      handleRouteChange();

      return () => {
        // Cleanup if necessary
      };
    }
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="sticky top-0 flex items-center justify-between p-4 bg-transparent text-gray-900 font-bebas text-2xl lg:text-2xl z-50 backdrop-blur-lg bg-white/70">
      {/* Logo (Redirect to Home) */}
      <div className="flex items-center space-x-2 z-50">
        <Link href="/" onClick={closeMenu}>
          <Image src="/c4plogo.png" alt="CARE4POOR Logo" width={70} height={70} className="h-auto w-auto cursor-pointer" />
        </Link>
        <Link href="/" onClick={closeMenu}>
          <span className="text-2xl font-bold text-[#94ae81] tracking-tight cursor-pointer">CARE4POOR</span>
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 font-semibold">
        <Link href="/">
          <span className="hover:text-[#94ae81] cursor-pointer tracking-tight">HOME</span>
        </Link>
        <Link href="/about-us">
          <span className="hover:text-[#94ae81] cursor-pointer tracking-tight">ABOUT US</span>
        </Link>
        <div className="relative">
          <button onClick={toggleDropdown} className="hover:text-[#94ae81] cursor-pointer tracking-tight flex items-center">
            PROGRAMS
            <ChevronDown className="ml-1" />
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white text-gray-900 p-2 rounded shadow-lg z-30">
              <Link href="/programs/score4change">
                <span className="block px-4 py-2 hover:text-[#94ae81]">Score4Change</span>
              </Link>
              <Link href="/programs/debate4change">
                <span className="block px-4 py-2 hover:text-[#94ae81]">Debate4Change</span>
              </Link>
            </div>
          )}
        </div>
        <Link href="/events">
          <span className="hover:text-[#94ae81] cursor-pointer tracking-tight">EVENTS</span>
        </Link>
        <Link href="/volunteer">
          <span className="hover:text-[#94ae81] cursor-pointer tracking-tight">VOLUNTEER</span>
        </Link>
        <Link href="/contact-us">
          <span className="hover:text-[#94ae81] cursor-pointer tracking-tight">CONTACT US</span>
        </Link>
        <Link href="/donate">
          <button className="px-4 py-2 bg-[#94ae81] text-slate-100 font-bold rounded-full hover:text-white hover:bg-green-800 transition duration-200">
            DONATE
          </button>
        </Link>
      </div>

      {/* Mobile & Tablet Menu Button */}
      <div className="lg:hidden z-50">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile & Tablet Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-white text-gray-900 font-bebas text-xl p-6 shadow-lg flex flex-col space-y-6 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ overflow: isOpen ? 'visible' : 'hidden' }}
      >
        {/* Close Button for Mobile & Tablet Menu */}
        <button onClick={closeMenu} className="absolute top-3 right-4 text-2xl text-gray-900 z-50">
          <X />
        </button>

        <Link href="/">
          <span className="hover:text-[#94ae81] cursor-pointer tracking-tight" onClick={closeMenu}>HOME</span>
        </Link>
        <Link href="/about-us">
          <span className="hover:text-[#94ae81] cursor-pointer tracking-tight" onClick={closeMenu}>ABOUT US</span>
        </Link>
        <button onClick={toggleDropdown} className="hover:text-[#94ae81] cursor-pointer tracking-tight flex items-center">
          PROGRAMS
          <ChevronDown className="ml-1 text-xl" />
        </button>
        {dropdownOpen && (
          <div className="mt-2 bg-white text-gray-900 p-2 rounded shadow-lg z-40 space-y-2">
            <Link href="/programs/score4change">
              <span className="block px-4 py-2 hover:text-[#94ae81]" onClick={closeMenu}>Score4Change</span>
            </Link>
            <Link href="/programs/debate4change">
              <span className="block px-4 py-2 hover:text-[#94ae81]" onClick={closeMenu}>Debate4Change</span>
            </Link>
          </div>
        )}
        <Link href="/events">
          <span className="hover:text-[#94ae81] cursor-pointer tracking-tight" onClick={closeMenu}>EVENTS</span>
        </Link>
        <Link href="/volunteer">
          <span className="hover:text-[#94ae81] cursor-pointer tracking-tight" onClick={closeMenu}>VOLUNTEER</span>
        </Link>
        <Link href="/contact-us">
          <span className="hover:text-[#94ae81] cursor-pointer tracking-tight" onClick={closeMenu}>CONTACT US</span>
        </Link>
        <Link href="/donate">
          <button className="w-full py-2 bg-[#94ae81] text-slate-100 font-bold rounded-full hover:text-white hover:bg-green-800 transition duration-200" onClick={closeMenu}>
            DONATE
          </button>
        </Link>
      </div>
      {isOpen && <div onClick={closeMenu} className="fixed inset-0 bg-black opacity-50 z-40"></div>}
    </nav>
  );
};

export default NavbarContent;
