// programs/page.tsx
import Link from 'next/link'; // Import Link for navigation
import React from 'react';

const ProgramsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <h1 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#94ae81] mb-8">
        Our Programs
      </h1>
      
      {/* Debate4Change Section */}
      <div className="max-w-xl text-center mb-8">
        <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-gray-800 mb-4">
          Debate4Change
        </h2>
        <p className="font-montserrat text-base sm:text-lg lg:text-xl text-gray-700 mb-4">
          Debate4Change fosters meaningful discussions that inspire action, providing a platform for youth to engage in debates and exchange ideas that contribute to real-world solutions.
        </p>
        <Link href="/programs/debate4change" className="font-montserrat text-[#94ae81] underline hover:text-green-600 transition">
          Learn more about Debate4Change
        </Link>
      </div>

      {/* Score4Change Section */}
      <div className="max-w-xl text-center">
        <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-gray-800 mb-4">
          Score4Change
        </h2>
        <p className="font-montserrat text-base sm:text-lg lg:text-xl text-gray-700 mb-4">
          Score4Change is a sports-based initiative that empowers communities through sports, encouraging teamwork, physical fitness, and community building to drive positive social impact.
        </p>
        <Link href="/programs/score4change" className="font-montserrat text-[#94ae81] underline hover:text-green-600 transition">
          Learn more about Score4Change
        </Link>
      </div>
    </div>
  );
};

export default ProgramsPage;
