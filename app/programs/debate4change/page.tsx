// app/page.tsx
import React from 'react';

const Debate4ChangePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl">
        <h1 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#94ae81] mb-4">
          Debate4Change
        </h1>
        <p className="font-montserrat text-base sm:text-lg lg:text-xl text-gray-700 mb-4">
          Welcome to Debate4Change, where every voice counts. Join us in fostering meaningful discussions to bring positive change.
        </p>
        <p className="font-montserrat text-base sm:text-lg lg:text-xl text-gray-500 italic mb-8">
          Our website is coming soon. Stay tuned!
        </p>
        {/* <button className="bg-green-700 text-white py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 rounded hover:bg-green-600 transition text-sm sm:text-base lg:text-lg">
          Get Involved
        </button> */}
      </div>
    </div>
  );
};

export default Debate4ChangePage;
