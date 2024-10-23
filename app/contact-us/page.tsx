import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ContactUsPage: React.FC = () => {
  return (
    <section className="relative min-h-screen py-16 px-6 bg-cover bg-center bg-no-repeat lg:rounded-3xl">
      {/* Background image using Next.js Image */}
      <div className="absolute inset-0 lg:rounded-3xl overflow-hidden z-0">
        <Image
          src="/image6-bw.JPG"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>

      <div className="max-w-7xl mx-auto bg-opacity-80 lg:rounded-3xl p-8 relative z-10">
        {/* Page Heading */}
        <h1 className="text-6xl font-bold font-bebas text-slate-100 text-center mb-12">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-md sm:rounded-lg lg:rounded-3xl shadow-lg p-8">
            <h2 className="text-5xl font-bebas text-[#94ae81] mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-700 font-montserrat mb-4">
              We would love to hear from you! Please reach out to us through any of the methods below.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bebas text-[#94ae81]">Phone Number</h3>
                <p className="text-lg text-gray-700 font-montserrat">+91 78382 95296</p>
              </div>

              <div>
                <h3 className="text-3xl font-bebas text-[#94ae81]">Email</h3>
                <Link href={`mailto:care4poor@gmail.com`} className="text-lg text-gray-700 font-montserrat">care4poor@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
