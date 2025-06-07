import React from "react";

const EventCard = () => {
  return (
    <div className="w-full">
      <div className=" mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/3 w-full h-64 md:h-auto">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1050&q=80"
            alt="Event"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 w-full p-8 relative flex flex-col justify-between">
          {/* Gradient Date Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            APR 09
          </div>

          {/* Title & Subtitle */}
          <div>
            <h2 className="text-gray-900 font-bold text-2xl mb-1">Headline</h2>

            {/* Time Info */}
            <div className="flex items-center gap-2 text-gray-600 text-sm font-medium mb-6">
              
              Mon, APR 09 · 7:00 PM – 10:00 PM
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum, magni earum, iste natus qui, deleniti culpa eveniet esse corporis quos fuga quis! Molestiae saepe reprehenderit sit ducimus aliquam quam?
            </p>
          </div>

          {/* Button */}
          <div className="mt-auto">
            <a
              href="#tickets"
              className="inline-block text-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-2 rounded-xl font-semibold shadow-lg transition duration-300 ease-in-out"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
