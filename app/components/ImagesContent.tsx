"use client"

import React, { useEffect } from 'react';

import Image from 'next/image';
import gsap from 'gsap';

const images = [
  '/images/image1.JPG',
  '/images/image2.JPG',
  '/images/image3.JPG',
  '/images/image4.JPG',
  '/images/image5.JPG',
  '/images/image6.JPG',
  '/images/image7.JPG',
  '/images/image8.JPG',
];

const ImagesContent: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      '.bento-grid img',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Keep the heading and paragraph visible on all screen sizes */}
      <div className="mb-8 text-center">
        <h2 className="font-bebas text-4xl text-green-700">Care4Poor</h2>
        <p className="font-montserrat text-lg text-gray-700">
          We are committed to helping the poor with food, clothing, and essential resources.
        </p>
      </div>

      {/* Grid layout that adapts to screen sizes */}
      <div className="bento-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* First 4 images will be visible on all screens */}
        {images.slice(0, 4).map((src, index) => (
          <div
            key={index}
            className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-3xl"
          >
            <Image
              src={src}
              alt={`image-${index + 1}`}
              fill
              className="transition-transform duration-500 ease-in-out transform translate-y-8 object-cover grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              {/* Optional text overlay */}
            </div>
          </div>
        ))}

        {/* Last 4 images are hidden on mobile, visible on md and larger */}
        {images.slice(4).map((src, index) => (
          <div
            key={index}
            className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-3xl hidden md:block"
          >
            <Image
              src={src}
              alt={`image-${index + 5}`} // Adjust index for correct alt text
              fill
              className="transition-transform duration-500 ease-in-out transform translate-y-8 object-cover grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              {/* Optional text overlay */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesContent;
