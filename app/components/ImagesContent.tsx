"use client";

import React, { useEffect, useRef } from 'react';

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
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // GSAP to create automatic sliding
    const containerWidth = imageContainerRef.current?.scrollWidth || 0;
    gsap.to(imageContainerRef.current, {
      x: `-${containerWidth - window.innerWidth}px`,
      ease: "linear",
      duration: 100,
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % containerWidth}px`
      }
    });
  }, []);

  return (
    <div className="container mx-auto py-12 px-4 sm:rounded-2xl lg:rounded-3xl overflow-hidden">
      {/* Heading and paragraph */}
      <div className="mb-8 text-center">
        <h2 className="font-bebas text-4xl text-[#94ae81]">Care4Poor</h2>
        <p className="font-montserrat text-lg text-gray-700">
          We are committed to helping the poor with food, clothing, and essential resources.
        </p>
      </div>

      {/* Full-width images with horizontal sliding */}
      <div
        className="flex space-x-4"
        ref={imageContainerRef}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full h-72 md:h-96 lg:h-[500px] overflow-hidden rounded-3xl"
          >
            <Image
              src={src}
              alt={`image-${index + 1}`}
              fill
              className="transition-transform duration-500 ease-in-out object-cover grayscale hover:grayscale-0"
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
