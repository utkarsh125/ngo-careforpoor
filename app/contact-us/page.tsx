import React from 'react';

const ContactUsPage: React.FC = () => {
  return (
    <section
      className="relative min-h-screen py-16 px-6 bg-cover bg-center bg-no-repeat rounded-3xl"
      style={{ backgroundImage: "url('/image6-bw.JPG')" }}
    >
      <div className="max-w-7xl mx-auto bg-white bg-opacity-80 rounded-3xl p-8 shadow-lg relative z-10">
        {/* Page Heading */}
        <h1 className="text-4xl font-bebas text-green-700 text-center mb-12">
          Contact Us
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-5xl font-bebas text-green-700 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-700 font-montserrat mb-4">
              We would love to hear from you! Please reach out to us through any of the methods below.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bebas text-green-700">Phone Number</h3>
                <p className="text-lg text-gray-700 font-montserrat">+91 (123) 456-7890</p>
              </div>

              <div>
                <h3 className="text-3xl font-bebas text-green-700">Email</h3>
                <p className="text-lg text-gray-700 font-montserrat">info@care4poor.org</p>
              </div>

              <div>
                <h3 className="text-3xl font-bebas text-green-700">Address</h3>
                <p className="text-lg text-gray-700 font-montserrat">
                  456 NGO Street, <br />
                  Care4Poor, Delhi, India 110001
                </p>
              </div>
            </div>
          </div>

          {/* Map Embed and Address */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.9936558799446!2d77.22731532252002!3d28.61393974359901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd087a61cbbf%3A0xe9bc18b0c1678d5e!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1632951497954!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="p-6 bg-white">
              <h3 className="text-2xl font-bebas text-green-700 mb-4">Our Location</h3>
              <p className="text-lg text-gray-700 font-montserrat">
                456 NGO Street, <br />
                Care4Poor, Delhi, India 110001
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
