import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../datasets/newseventData'

const ImageSet = () => {
  return (
    <section className="">
      <h2 data-aos="zoom-in" className='after:block after:h-[2px] after:w-12 after:mx-auto after:bg-cuswebyellow after:mt-1 text-center text-3xl lg:text-3xl mb-16 font-semibold  text-gray-800'>News & Events</h2>

      <div className='h-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {
          data.filter((ele, index) => index < 3).map((ele, index) => (
            <div key={index} className="w-full h-[50vh] overflow-hidden relative">
              <img
                className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-500"
                src={ele.img}
                alt={ele.name}
              />

              <Link to={`/newsevent/${ele.id}`}>
                <h2 className="absolute bottom-0 left-0 z-10 text-white bg-black bg-opacity-50 px-2 py-1">
                  {ele.name}
                </h2>

              </Link>
            </div>
          ))
        }

        {
          data.filter((ele, index) => index == 3).map((ele, inedx) => (

            <div key={inedx} className="w-full h-[50vh] flex flex-col">
              <div className="h-1/2 overflow-hidden relative">
                <img
                  className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-500"
                  src={ele.img}
                  alt="Image 4"
                />

                <Link to={`/newsevent/${ele.id}`}>
                  <h2 className="absolute bottom-0 left-0 z-10 text-white bg-black bg-opacity-50 px-2 py-1">
                    {ele.name}
                  </h2>
                </Link>
              </div>



              <div className="h-1/2 flex items-center justify-center bg-amber-300 text-lg font-semibold text-gray-800 hover:bg-amber-400 transition duration-300">

                <Link to={'/newsevent'} className=' cursor-pointer'>
                  Explore More

                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ImageSet