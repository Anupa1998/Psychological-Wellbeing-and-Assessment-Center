import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className='home-wrapper'>
            <div className='darkness'></div>

            <div className='text-center z-50 text-cuswhite'>
                <h1 className='text-5xl font-bold'>Your Mental Wellness Matters</h1>
                <p className='text-xl mt-2.5'>A safe space for students, staff, and families of the university <br /> to receive compassionate psychological support and care.</p>

                <Link to={''}>
                    <p className='mt-3 text-xl border-2 px-3 py-2 border-cusyellow inline-block'>Book an appointment</p>
                </Link>


            </div>
        </section>
    )
}

export default Home