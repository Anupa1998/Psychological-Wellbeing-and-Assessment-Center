import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div data-aos="zoom-in" className="w-full">
      <div className="customShadow mx-auto bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row lg:h-64">
        {/* Image Section */}
        <div className="md:w-1/3 w-full h-64 lg:h-full overflow-hidden">
        {/* <div className="md:w-1/3 w-full h-64 md:h-64 overflow-hidden"> */}
          <img
            className="w-full h-full object-cover hover:scale-105  duration-300"
            src={event.image}
            alt="Event"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 w-full p-8 flex flex-col justify-between ">
          {/* Gradient Date Badge */}
            <div className="absolute top-4 right-4 md:block bg-gradient-to-r from-[#f6bc0c] via-orange-400 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
              APR 09
            </div>

            {/* Title & Subtitle */}
            <div>
              <Link to={`/workshops/${event.id}`}>
                <h2 className="text-gray-800 font-bold text-lg mb-1">{event.headline}</h2>
              </Link>

              {/* Time Info */}
              <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                {event.date} - {event.time}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {event.shortDescription}
              </p>
            </div>

            {/* Button */}
            <div className="mt-auto">
              <a
                href={event.registerLink}
                target="_blank"
                className="inline-block text-center bg-gradient-to-r from-[#f6bc0c] via-orange-400 to-red-500
                        text-white px-6 py-2 rounded-xl font-semibold shadow-lg transition duration-300 ease-in-out
                          hover:scale-105 hover:shadow-xl hover:brightness-110"
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
