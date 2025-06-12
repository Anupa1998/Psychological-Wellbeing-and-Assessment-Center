import React from 'react'
import TitleHeader from '../../components/title/TitleHeader'
import { FaPhoneAlt, FaEnvelope, FaClock, FaUserFriends } from 'react-icons/fa';
import { HiOutlineClipboardList } from 'react-icons/hi';

const Apointment = () => {
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

            <div className="bg-indigo-50 p-4 rounded-xl">
                <h3 className="text-xl font-semibold text-indigo-700 flex items-center gap-2">
                    <FaUserFriends /> Who Can Book?
                </h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>University of Peradeniya students</li>
                    <li>Academic and non-academic staff</li>
                    <li>Immediate family members of students and staff</li>
                </ul>
            </div>

            
            <div className="bg-blue-50 p-4 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-700 flex items-center gap-2">
                    <HiOutlineClipboardList /> How It Works
                </h3>
                <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-1">
                    <li>Submit the form with your preferred time and reason for the visit</li>
                    <li>Our team will contact you within 24 hours to confirm</li>
                    <li className="flex items-center gap-2">
                        <FaClock className="text-blue-600" />
                        Walk-in available: <strong>9:00 AM – 4:00 PM (Weekdays only)</strong>
                    </li>
                </ol>
                <div className="mt-4">
                    {/* Replace with your actual form link or route */}
                    <a
                        href="#"
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                    >
                        Book an Appointment
                    </a>
                </div>
                <p className="mt-2 text-sm text-gray-600 italic">
                    All services are free and strictly confidential.
                </p>
            </div>



            <p className="text-sm italic text-gray-500 border-l-4 border-yellow-300 pl-4">
                The above is a sample form. A new sample form has been attached in the Annexture section.
            </p>



            <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Details for Urgent Help</h3>
                <p className="text-gray-700 space-y-1">
                    <span className="block font-medium">Psychological Wellbeing and Assessment Center</span>
                    <span className="block">University of Peradeniya</span>
                    <span className="flex items-center gap-2 mt-1">
                        <FaPhoneAlt className="text-green-600" />
                        <span className="text-gray-800">Tel. No : <strong>[Insert Phone Number]</strong></span>
                    </span>
                    <span className="flex items-center gap-2 mt-1">
                        <FaEnvelope className="text-red-500" />
                        <span className="text-gray-800">Email : <strong>[Insert Email Address]</strong></span>
                    </span>
                </p>
            </div>


            
        </div>
    )
}

export default Apointment