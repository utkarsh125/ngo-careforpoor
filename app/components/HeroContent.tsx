import Image from 'next/image';
// components/HeroContent.tsx
import React from 'react';

const HeroContent: React.FC = () => {
  return (
    <section className="flex flex-col xl:flex-row justify-between px-4 sm:px-6 md:px-12 py-12 bg-white space-y-8 xl:space-y-0">
      {/* Left Side - Text Content */}
      <div className="w-full xl:w-1/2 space-y-4 text-center xl:text-left">
        <h1 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-gray-900">
          MAKE A <span className="text-green-700">DONATION</span> & <br />
          <span className="text-green-700">HELP</span> THE POOR.
        </h1>
        <p className="font-montserrat text-base sm:text-lg lg:text-xl text-gray-500">
          For free time, when the choice is free for us to choose, and nothing prevents us from doing what we like best.
        </p>
        
        {/* Buttons */}
        <div className="flex justify-center xl:justify-start space-x-4 mt-6">
          <button className="bg-green-700 text-slate-100 font-montserrat px-6 py-3 rounded-full hover:bg-green-800 transition">
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

        {/* New Section - Calendar Image */}
        {/* <h2 className="font-montserrat text-2xl text-gray-900 mt-8 text-center xl:text-left">
          Want to Volunteer? Look at the dates
        </h2>
        <div className="flex justify-center xl:justify-start mt-4">
          <Image
            src="/calendar.png"
            alt="Calendar"
            width={150}
            height={150}
            className="object-contain"
          />
        </div> */}
      </div>
      
      {/* Right Side - Video */}
      <div className="w-full xl:w-1/2 flex justify-center">
        <video
          className="rounded-3xl w-full xs:w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-9/12 h-auto"
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
