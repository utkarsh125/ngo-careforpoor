import Image from 'next/image';
import React from 'react';

interface Event {
  date: string;
  title: string;
  description: string;
}

const events: Event[] = [
  {
    date: 'Thu 14',
    title: 'Food Distribution Drive',
    description: 'Volunteers will help distribute meals to the homeless community.',
  },
  {
    date: 'Fri 22',
    title: 'Health Check-up Camp',
    description: 'Free health check-ups will be conducted for underprivileged families.',
  },
  {
    date: 'Mon 25',
    title: 'Clothing Donation Event',
    description: 'Winter clothes will be distributed to families in need.',
  },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="bg-green-100 p-4 rounded-lg shadow-sm mb-4">
      <div className="text-green-700 text-3xl font-semibold font-bebas">{event.title}</div>
      <div className="text-gray-800">{event.date}</div>
      <p className="text-gray-700 mt-2 font-montserrat">{event.description}</p>
    </div>
  );
};

const EventsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl text-green-700 font-bebas text-center mb-6">Upcoming Events</h1>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
        {/* Event List on the Left */}
        <div className="lg:w-1/2">
          <div className="space-y-4">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>

        {/* Grayscale Image on the Right */}
        <div className="lg:w-1/2">
          <Image
            src="/image4.JPG"
            alt="Event image"
            width={700}  // Specify a width
            height={500}  // Specify a height
            className="w-full h-auto rounded-lg grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
