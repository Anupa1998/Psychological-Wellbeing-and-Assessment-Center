import React, { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa';

const TeamCard = ({ onClick, name, position, img, email }) => {

    return (
        <div className="max-w-xl w-full cursor-default  rounded-2xl customShadow flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow duration-300" >
            {/* Image Section */}
            <div className="md:w-1/3 w-full overflow-hidden  h-64 md:h-64">
                <img
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    src={img}
                    alt={name}
                />
            </div>

            {/* Text Section */}
            <div className="md:w-2/3 p-4 flex flex-col justify-center" >
                <h3 className="text-xl font-semibold text-gray-800 cursor-pointer" onClick={onClick}>{name}</h3>
                <p className="text-gray-700 mt-0.5">{position}</p>
                <p className='text-gray-700 mt-1 flex items-center space-x-1'>
                    < FaEnvelope className=' text-xl' />
                    <span>
                        {email}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default TeamCard