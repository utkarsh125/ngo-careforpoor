// components/ImagesContent.tsx
"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const ImagesContent: React.FC = () => {
  const images = Array.from({ length: 8 }, (_, index) => `/images/image${index + 1}.JPG`)

  return (
    <div className="bg-white py-10 overflow-hidden">
      <div className="space-y-6">
        {[0, 1].map(row => (
          <motion.div
            key={row}
            className="flex justify-center space-x-6 animate-scroll"
            initial={{ x: row % 2 === 0 ? 0 : -500 }}
            animate={{ x: row % 2 === 0 ? -500 : 0 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {images.slice(row * 10, (row + 1) * 10).map((src, index) => (
              <motion.div
                key={index}
                className="relative w-40 h-40 transform transition-transform hover:scale-110 grayscale overflow-hidden"
                style={{
                  transform: `rotate(${Math.random() * 10 - 5}deg)`,
                }}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="grayscale"
                  priority
                />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        .animate-scroll {
          animation: scroll-left 60s linear infinite;
        }
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  )
}

export default ImagesContent
