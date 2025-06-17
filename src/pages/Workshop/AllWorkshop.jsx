import React from 'react'
import EventCard from '../../components/EventCard/EventCard'
import { data } from '../../datasets/eventData'

const AllWorkshop = () => {
  return (
    <section className='py-16 px-6 lg:px-24'>
            <h2 data-aos="zoom-in" className='after:block after:h-[2px] after:w-12 after:mx-auto after:bg-cusred after:mt-1 text-center text-3xl lg:text-3xl mb-16 font-semibold  text-gray-800'>Workshop</h2>

            <div className=' grid md:grid-cols-2 gap-8 grid-cols-1'>
              {
                data.map((ele,index) =>(
                  <EventCard key={index} event={ele}/>
                ))
              }
                
            </div>
    </section>
  )
}

export default AllWorkshop