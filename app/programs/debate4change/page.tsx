import Image from 'next/image'; // Import Image component from Next.js
// app/page.tsx
import React from 'react';

const Debate4ChangePage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 rounded-none sm:rounded-2xl lg:rounded-3xl overflow-hidden">
        <Image
          src="/debate4change.webp"
          alt="Debate4Change"
          layout="fill"
          objectFit="cover"
          className="grayscale"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 -z-10 rounded-none sm:rounded-2xl lg:rounded-3xl"></div>

      {/* Foreground Content */}
      <div className="text-center max-w-2xl">
        <h1 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#94ae81] mb-4">
          Debate4Change
        </h1>
        <p className="font-montserrat text-base sm:text-lg lg:text-xl text-gray-100 mb-4">
          Welcome to Debate4Change, where every voice counts. Join us in fostering meaningful discussions to bring positive change.
        </p>
        <p className="font-montserrat text-base sm:text-lg lg:text-xl text-gray-300 italic mb-8">
          Our website is coming soon. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default Debate4ChangePage;
