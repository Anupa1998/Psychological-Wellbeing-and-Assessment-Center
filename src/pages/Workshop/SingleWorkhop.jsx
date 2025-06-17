import React from 'react'
import { data } from '../../datasets/eventData'
import { useParams } from "react-router-dom";

const SingleWorkhop = () => {

  const { workshopid } = useParams();
  const workshop = data.find((item) => item.id.toString() === workshopid);

  if (!workshop) {
    return <h2 className='text-center text-red-500 mt-10'>Couldn't find the workshop</h2>;
  }

  return (
    <section className="py-16 px-6 lg:px-24">
      <div className="md:flex md:space-x-8 space-y-8 md:space-y-0">
        {/* Left Image */}
        <div className="md:w-1/3">
          <img
            src={workshop.image}
            alt="Workshop"
            className="h-[90vh] w-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-2/3 w-full flex flex-col justify-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{workshop.headline}</h2>
            <p className="text-gray-700 mb-4">{workshop.shortDescription}</p>
            <p className="mb-1 text-gray-700">
              <strong>Date:</strong> {workshop.date}
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Time:</strong> {workshop.time}
            </p>
            <p className="text-gray-700 mb-6">{workshop.description}</p>
            <a
              href={workshop.registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-gradient-to-r from-[#f6bc0c] via-orange-400 to-red-500 text-white px-6 py-2 rounded-xl font-semibold shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default SingleWorkhop