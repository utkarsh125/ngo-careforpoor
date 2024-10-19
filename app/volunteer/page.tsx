"use client"

import { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsappNumber: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('1WOnuEGlJXD4se6YDDy51kTEgM1wV6fnPtTnxNtDrde0', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({
        name: '',
        whatsappNumber: '',
        email: '',
      });
    } else {
      console.error('Error submitting the form');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bebas mb-6 text-center">Contact Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-700 focus:border-green-700"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
            <input
              type="text"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              placeholder="Enter your WhatsApp number"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-700 focus:border-green-700"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-700 focus:border-green-700"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-700 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-center text-green-600">
            Thank you! Your response has been submitted.
          </p>
        )}
      </div>
    </div>
  );
};

export default FormPage;
