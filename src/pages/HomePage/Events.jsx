import React from 'react'
import EventCard from '../../components/EventCard/EventCard'
import Button from '../../components/Button/Button'
import { data } from '../../datasets/eventData'


const Events = () => {
    return (
        <section className='py-24 px-6 lg:px-24'>
            <h2 data-aos="zoom-in" className='after:block after:h-[2px] after:w-12 after:mx-auto after:bg-cuswebyellow after:mt-1 text-center text-3xl lg:text-3xl mb-16 font-semibold  text-gray-800'>Workshop</h2>

            <div className='grid md:grid-cols-2 gap-8'>
                {data
                    .filter((ele, index) => index < 2)
                    .map((ele, index) => (
                        <EventCard key={ele.id || index} event={ele} />
                    ))}
            </div>

            <div data-aos="zoom-in" className=' flex justify-center mt-16'>
                <Button title={'Explore more workshop'} color='#560606' to='/workshops' />
            </div>

        </section>
    )
}

export default Events