import Image from 'next/image';
// components/HeroContent.tsx
import React from 'react';

const HeroContent: React.FC = () => {
  return (
    <section className="flex flex-col xl:flex-row justify-between px-4 sm:px-6 md:px-12 py-12 bg-white space-y-8 xl:space-y-0">
      {/* Left Side - Text Content */}
      <div className="w-full xl:w-1/2 space-y-4 text-center xl:text-left">
        <h1 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-gray-900">
          MAKE A <span className="text-[#94ae81]">DONATION</span> & <br />
          <span className="text-[#94ae81]">HELP</span> THE POOR.
        </h1>
        <p className="font-montserrat text-base sm:text-lg lg:text-xl text-gray-500">
          For free time, when the choice is free for us to choose, and nothing prevents us from doing what we like best.
        </p>
        
        {/* Buttons */}
        <div className="flex justify-center xl:justify-start space-x-4 mt-6">
          <button className="bg-[#94ae81] text-slate-100 font-montserrat px-6 py-3 rounded-full hover:bg-green-800 transition">
            Donate Now
          </button>
          <button className="border border-gray-900 text-gray-900 font-montserrat px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition">
            Explore More
          </button>
        </div>

        {/* Image Row */}
        <div className="flex justify-center xl:justify-start space-x-4 mt-8">
          <div className="w-1/3">
            <Image
              src="/hero1.jpg"
              alt="Support Image 1"
              width={200}
              height={300}
              className="rounded-3xl filter grayscale object-cover"
              priority
            />
          </div>
          <div className="w-1/3">
            <Image
              src="/hero2.jpg"
              alt="Support Image 2"
              width={200}
              height={300}
              className="rounded-3xl filter grayscale object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-1/3">
            <Image
              src="/hero3.jpg"
              alt="Support Image 3"
              width={200}
              height={300}
              className="rounded-3xl filter grayscale object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="flex flex-col gap-4 mt-8">
          <h2 className="font-bebas text-5xl text-[#94ae81]">
            <span className="text-gray-900">Impact</span> Statistics
          </h2>
          <div className="flex flex-col space-y-1">
            <p className="text-base font-montserrat sm:text-lg lg:text-xl text-gray-500">Over 5000 meals distributed</p>
            <p className="text-base font-montserrat sm:text-lg lg:text-xl text-gray-500">Supporting 200+ families</p>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="flex flex-col gap-4 mt-8">
          <h2 className="font-bebas text-5xl text-[#94ae81]">
            <span className="text-gray-900">Upcoming</span> Events
          </h2>
          <div className="flex flex-col">
            <p className="text-base font-montserrat sm:text-lg lg:text-xl text-gray-500">
              We keep conducting events and drives to help out the poor
            </p>
          </div>
          <div className="flex justify-center xl:justify-start">
            <button className="bg-[#94ae81] text-white font-montserrat px-6 py-3 rounded-full hover:bg-green-800 transition">
              Event Catalog
            </button>
          </div>
        </div>
      </div>
      
      {/* Right Side - Video */}
      <div className="w-full xl:w-1/2 flex justify-center xl:justify-end px-4">
        <video
          className="rounded-3xl w-full sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-full h-auto"
          muted
          loop
          playsInline
          autoPlay
          src="/herovid.mp4"
          aria-label="Promotional video about Care For Poor - C4P"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroContent;
