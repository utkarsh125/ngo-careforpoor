import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <section className="min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bebas text-[#94ae81] text-center mb-8">
          About Us
        </h1>
        <p className="text-lg text-gray-700 font-montserrat text-center mb-16">
          At Care4Poor, we are dedicated to making a meaningful impact in the lives of those in need. Our mission is to provide support, resources, and hope to the underprivileged and marginalized communities through various outreach programs and campaigns.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10"> {/* Adjusted gap */}
          {/* Our Mission */}
          <div className="relative rounded-3xl shadow-lg p-8">
            <div className="absolute inset-0 z-0">
              <Image
                src="/about-us/mission.JPG"
                alt="Mission"
                fill
                className="rounded-3xl object-cover grayscale"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-65 rounded-3xl z-10"></div>
            <div className="relative z-20">
              <h2 className="text-3xl font-bebas text-white mb-4">Our Mission</h2>
              <p className="text-white text-lg font-montserrat">
                Care4Poor strives to empower the underprivileged by providing access to basic necessities, education, healthcare, and support for a better quality of life. We believe in creating opportunities for everyone, regardless of their background.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="relative rounded-3xl shadow-lg p-8">
            <div className="absolute inset-0 z-0">
              <Image
                src="/about-us/vision.JPG"
                alt="Vision"
                fill
                className="rounded-3xl object-cover grayscale"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-65 rounded-3xl z-10"></div>
            <div className="relative z-20">
              <h2 className="text-3xl font-bebas text-white mb-4">Our Vision</h2>
              <p className="text-white text-lg font-montserrat">
                We envision a world where poverty is eradicated, and every person has the chance to live a dignified and fulfilling life. Care4Poor seeks to be a beacon of hope, providing assistance where it’s needed most and advocating for social change.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-9"> {/* Adjusted gap */}
          {/* What We Do */}
          <div className="relative rounded-3xl shadow-lg p-8">
            <div className="absolute inset-0 z-0">
              <Image
                src="/about-us/what-we-do.JPG"
                alt="What We Do"
                fill
                className="rounded-3xl object-cover grayscale"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-65 rounded-3xl z-10"></div>
            <div className="relative z-20">
              <h2 className="text-3xl font-bebas text-white mb-4">What We Do</h2>
              <p className="text-white text-lg font-montserrat">
                Through various campaigns, including food drives, health awareness programs, and educational support, we aim to provide tangible solutions to the most pressing needs of impoverished communities. We work hand in hand with local partners and volunteers to reach those in need.
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className="relative rounded-3xl shadow-lg p-8">
            <div className="absolute inset-0 z-0">
              <Image
                src="/about-us/values.JPG"
                alt="Values"
                fill
                className="rounded-3xl object-cover grayscale"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-65 rounded-3xl z-10"></div>
            <div className="relative z-20">
              <h2 className="text-3xl font-bebas text-white mb-4">Our Values</h2>
              <ul className="text-white text-lg font-montserrat list-disc ml-6 space-y-2">
                <li>Compassion</li>
                <li>Empowerment</li>
                <li>Integrity</li>
                <li>Commitment to Community</li>
                <li>Transparency</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bebas text-[#94ae81] mb-8">Get Involved</h2>
          <p className="text-lg text-gray-700 font-montserrat mb-8">
            Join us in making a difference! Whether through donations, volunteering, or spreading the word, your support can help transform lives.
          </p>
          <div className="flex items-center gap-2 justify-center">
            <Link href="/donate" className="bg-[#94ae81] font-montserrat text-white px-6 py-3 rounded-3xl text-lg hover:bg-green-600">
              Donate
            </Link>
            <Link href="/volunteer" className="bg-white font-montserrat text-gray-900 px-6 py-3 rounded-3xl text-lg hover:bg-black hover:text-white border border-black">
              Volunteer
            </Link>
          </div>

          {/* Instagram Link Button */}
          <div className="mt-8">
            <Link href="https://www.instagram.com/care4poor/profilecard/?igsh=MWU4bWxlMHp5cmYxdA==" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#94ae81] font-montserrat text-white px-6 py-3 rounded-3xl text-lg hover:bg-green-600">
                Follow Us on Instagram
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
