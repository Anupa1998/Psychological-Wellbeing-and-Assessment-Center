import React from 'react'
import {FaClock, FaUserFriends } from 'react-icons/fa';
import { HiOutlineClipboardList } from 'react-icons/hi';

const ApointmentDetails = () => {
    return (
        // <div className='grid grid-cols-2 gap-8'>
        //     {/* Who can book */}
        //     <div className=' customShadow p-8 rounded-lg border-l-4 border-cuswebyellow'>
        //         <h3 className="text-xl font-semibold flex items-center gap-2">
        //             <FaUserFriends /> Who Can Book?
        //         </h3>

        //         <ul className="list-[square] list-inside mt-2 space-y-1">
        //             <li>University of Peradeniya students</li>
        //             <li>Academic and non-academic staff</li>
        //             <li>Immediate family members of students and staff</li>
        //         </ul>
        //     </div>

        //     {/* How it work */}
        //     <div className='customShadow p-8 rounded-lg border-l-4 border-cuswebyellow'>
        //         <h3 className="text-xl font-semibold flex items-center gap-2">
        //             <HiOutlineClipboardList /> How It Works
        //         </h3>
        //         <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-1">
        //             <li>Submit the form with your preferred time and reason for the visit</li>
        //             <li>Our team will contact you within 24 hours to confirm</li>
        //             <li className="flex items-center gap-2">
        //                 <FaClock className="" />
        //                 Walk-in available: <strong>9:00 AM – 4:00 PM (Weekdays only)</strong>
        //             </li>
        //         </ol>
        //     </div>
        // </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Who Can Book */}
  <div className="customShadow p-8 rounded-2xl border-l-4 border-cuswebyellow bg-white hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
      <FaUserFriends className="text-cuswebyellow" /> Who Can Book?
    </h3>
    <ul className="list-[square] list-inside mt-4 text-gray-700 space-y-1 marker:text-cuswebyellow">
      <li>University of Peradeniya students</li>
      <li>Academic and non-academic staff</li>
      <li>Immediate family members of students and staff</li>
    </ul>
  </div>

  {/* How It Works */}
  <div className="customShadow p-8 rounded-2xl border-l-4 border-cuswebyellow bg-white transition-shadow duration-300">
    <h3 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
      <HiOutlineClipboardList className="text-cuswebyellow" /> How It Works
    </h3>
    <ol className="list-decimal list-inside mt-4 text-gray-700 space-y-2 marker:text-cuswebyellow">
      <li>Submit the form with your preferred time and reason for the visit</li>
      <li>Our team will contact you within 24 hours to confirm</li>
      <li className="flex items-start gap-2">
        <FaClock className="mt-1 text-cuswebyellow" />
        <span>
          Walk-in available: <strong>9:00 AM – 4:00 PM (Weekdays only)</strong>
        </span>
      </li>
    </ol>
  </div>
</div>

    )
}

export default ApointmentDetails




