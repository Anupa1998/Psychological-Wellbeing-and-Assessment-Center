import React from 'react'
import {FaClock, FaUserFriends } from 'react-icons/fa';
import { HiOutlineClipboardList } from 'react-icons/hi';

const ApointmentDetails = () => {
    return (
        <div className='space-y-16'>
            {/* Who can book */}
            <div className=''>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                    <FaUserFriends /> Who Can Book?
                </h3>

                <ul className="list-[square] list-inside mt-2 space-y-1">
                    <li>University of Peradeniya students</li>
                    <li>Academic and non-academic staff</li>
                    <li>Immediate family members of students and staff</li>
                </ul>
            </div>

            {/* How it work */}
            <div>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                    <HiOutlineClipboardList /> How It Works
                </h3>
                <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-1">
                    <li>Submit the form with your preferred time and reason for the visit</li>
                    <li>Our team will contact you within 24 hours to confirm</li>
                    <li className="flex items-center gap-2">
                        <FaClock className="" />
                        Walk-in available: <strong>9:00 AM – 4:00 PM (Weekdays only)</strong>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default ApointmentDetails




