import Image from 'next/image';
import React from 'react';

const VolunteerContent: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 py-12 sm:rounded-3xl lg:rounded-3xl overflow-hidden h-96 xl:h-auto">
      {/* Background Image */}
      <Image
        src="/volunteer.jpg"
        alt="Volunteer Background Image"
        fill
        className="object-cover object-[center_top_10%]"  // Adjust top position as needed
        priority
      />
      
      {/* Green Overlay */}
      <div className="absolute inset-0 bg-[#94ae81] bg-opacity-60"></div>
      
      {/* Text Content */}
      <div className="relative z-10 space-y-4 p-6">
        <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white">
          JOIN OUR <span className="text-white">MISSION</span> <br />
          TO <span className="text-white">MAKE A DIFFERENCE</span>
        </h2>
        <p className="font-montserrat text-base sm:text-lg lg:text-xl text-white">
          Volunteering with us provides you with the unique opportunity to serve those in need and create positive change in your community.
        </p>
        
        {/* Call to Action Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-white text-green-700 font-montserrat px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
};

export default VolunteerContent;
