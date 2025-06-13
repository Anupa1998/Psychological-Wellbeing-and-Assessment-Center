import React, { useState } from 'react'
import TitleHeader from '../../components/title/TitleHeader'
import { FaPhoneAlt, FaEnvelope, FaClock, FaUserFriends } from 'react-icons/fa';
import ApointMentForm from './ApointMentForm';
import ApointmentDetails from './ApointmentDetails';

const Apointment = () => {
    const [formDisplay, setFormDisplay] = useState(false);

    const handleFormDisplay = () => {
        setFormDisplay(true);
    }

    return (
        <div>
            <TitleHeader>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg">
                    Take the First Step Toward Mental Wellness
                </h2>
                <p className="text-white/90 text-sm md:text-base leading-relaxed italic">
                    Whether you're seeking immediate support or looking to explore your mental health further, our team is here to help.
                    <br /> Booking is simple and confidential.

                </p>
            </TitleHeader>

            <section className='pt-16 px-6 lg:px-24'>
                <ApointmentDetails />

                <div className="my-8">
                    <a
                        href="#form"
                        className="bg-cusred cursor-pointer text-white inline-block  border font-semibold py-2 px-6 rounded-lg transition duration-300"
                        onClick={handleFormDisplay}
                    >
                        Book an Appointment
                    </a>
                    <p className="mt-2 text-sm text-gray-600 italic">
                        All services are free and strictly confidential.
                    </p>
                </div>

                {/* form */}
                <div id='form' className={`px-4 ${formDisplay ? 'block' : 'hidden'}`}>
                    <ApointMentForm />
                </div>
                {/* form section end */}

            </section>
            <div className="py-8 text-white px-6 lg:px-24  bg-cusred">
                <h3 className="text-xl font-semibold  mb-2 ">Contact Details for Urgent Help</h3>
                <p className=" space-y-1 text-gray-200">
                    <span className="block font-medium">Psychological Wellbeing and Assessment Center</span>
                    <span className="block">University of Peradeniya</span>
                    <span className="flex items-center gap-2 mt-1">
                        <FaPhoneAlt className="text-cuswebyellow" />
                        <span className=" ">Tel. No : <strong>0812 392 816</strong></span>
                    </span>
                    <span className="flex items-center gap-2 mt-1">
                        <FaEnvelope className="text-cuswebyellow" />
                        <span className=" ">Email : <strong>hod.psy@arts.pdn.ac.lk</strong></span>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Apointment