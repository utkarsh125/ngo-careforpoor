import { Calendar } from "lucide-react";

const events = [
  { date: "2024-11-12", title: "Health Awareness Campaign" },
  { date: "2024-12-05", title: "Food Drive" },
  { date: "2024-12-25", title: "Education Drive" },
];

const EventsPage = () => {
  return (
    <section
      className="min-h-screen py-16 px-4 bg-cover bg-center rounded-3xl"
      style={{ backgroundImage: "url('/image6.JPG')" }}
    >
      <div className="max-w-7xl mx-auto bg-white bg-opacity-80 rounded-3xl p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bebas text-green-700 mb-4">
            Upcoming Campaigns
          </h1>
          <p className="text-lg text-gray-700 font-montserrat">
            Join us in our efforts to make the world a better place.
          </p>
        </header>

        {/* Cards arranged vertically and taking full width */}
        <div className="flex flex-col gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="w-full bg-green-700 text-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
            >
              <Calendar className="w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bebas mb-2">{event.title}</h2>
              <p className="text-lg font-montserrat">
                {new Date(event.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
