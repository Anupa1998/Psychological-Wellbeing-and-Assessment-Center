import React from 'react'
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'

const FirstSection = () => {
    return (
        <section className='home-wrapper'>
            <div className='darkness'></div>
            
            <div className='text-center z-10 text-cuswhite'>
                <h1 className='text-5xl font-bold'>Your Mental Wellness Matters</h1>
                <p className='text-xl mt-2.5'>A safe space for students, staff, and families of the university <br /> to receive compassionate psychological support and care.</p>

                <Link to={''}>
                    <p className='mt-5 hover:bg-transparent duration-500 text-xl border-2 px-3 py-2 bg-cusyellow border-cusyellow rounded-lg inline-block'>Book an appointment</p>
                </Link>


            </div>
        </section>
    )
}

export default FirstSection