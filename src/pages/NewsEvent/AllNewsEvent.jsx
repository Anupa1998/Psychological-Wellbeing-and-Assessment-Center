import React from 'react'
import { data } from '../../datasets/newseventData'
import { Link } from 'react-router-dom'

const AllNewsEvent = () => {
    return (
        <section className='py-16 px-6 lg:px-24'>
            <h2 data-aos="zoom-in" className='after:block after:h-[2px] after:w-12 after:mx-auto after:bg-cusred after:mt-1 text-center text-3xl lg:text-3xl mb-16 font-semibold  text-gray-800'>News & Events</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((ele, index) => (
                    <div
                        key={index}
                        className="rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-[1.02] bg-white"
                    >
                        <div className="h-[250px] w-full overflow-hidden">
                            <img
                                src={ele.img}
                                alt={ele.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        <div className="p-4">
                            <Link to={`/newsevent/${ele.id}`}>
                                <h3 className="text-lg font-semibold text-gray-800 hover:text-cusred transition duration-300">
                                    {ele.name}
                                </h3>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default AllNewsEvent