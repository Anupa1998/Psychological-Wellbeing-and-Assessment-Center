import React from 'react'
import EventCard from '../../components/EventCard/EventCard'



const Events = () => {
    return (
        <section className='py-24 px-6 lg:px-24'>
            <h2 className=' text-center text-3xl lg:text-3xl mb-16 font-semibold  text-gray-800'>Events & Workshop</h2>

            <EventCard/>
            


            {/* <div className="w-full px-4">
                <div className="flex flex-wrap justify-center gap-6">
                    
                    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img
                            className="w-full h-48 object-cover"
                            src="https://cdn.pixabay.com/photo/2025/05/26/10/27/rock-9622937_640.jpg"
                            alt="Event"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Tech Conference 2025</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Join leading experts and innovators in technology for a day of inspiration and connection.
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span><i className="far fa-calendar-alt mr-1"></i>June 15, 2025</span>
                                
                            </div>
                            <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition">
                                Register Now
                            </button>
                        </div>
                    </div>

                   







                    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img
                            className="w-full h-48 object-cover"
                            src="https://cdn.pixabay.com/photo/2025/05/26/10/27/rock-9622937_640.jpg"
                            
                            alt="Event"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Tech Conference 2025</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Join leading experts and innovators in technology for a day of inspiration and connection.
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span><i className="far fa-calendar-alt mr-1"></i>June 15, 2025</span>
                                
                            </div>
                            <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition">
                                Register Now
                            </button>
                        </div>
                    </div>












                    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img
                            className="w-full h-48 object-cover"
                            src="https://cdn.pixabay.com/photo/2025/05/26/10/27/rock-9622937_640.jpg"
                            alt="Event"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Tech Conference 2025</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Join leading experts and innovators in technology for a day of inspiration and connection.
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span><i className="far fa-calendar-alt mr-1"></i>June 15, 2025</span>
                                
                            </div>
                            <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition">
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}


        </section>
    )
}

export default Events