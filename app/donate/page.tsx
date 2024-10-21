import React from 'react';

const DonationPage: React.FC = () => {
  return (
    <section className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center font-bebas text-[#94ae81] mb-6">
          Make a Donation
        </h1>
        <p className="text-lg text-gray-700 text-center font-montserrat mb-12">
          Your donation helps us continue our mission to support the underprivileged and provide resources for those in need.
        </p>

        {/* Form Section */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Donation Form (Coming Soon)
          </h2>
          <p className="text-center text-gray-600 font-montserrat">
            Unfortunately, this section of the donation page is still under development. Please check back soon for updates.
          </p>
        </div>

        {/* Placeholder for additional donation information */}
        <div className="mt-8">
          <p className="text-center text-gray-700 font-montserrat">
            We appreciate your interest in donating! Stay tuned as we complete the donation process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationPage;
