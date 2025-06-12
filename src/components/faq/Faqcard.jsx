import React, { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";


const Faqcard = ({ title, description, isOpen, onClick }) => {


    return (
        <div className='border border-l-4 border-l-cuswebyellow p-4 mb-2 rounded shadow transition-transform duration-300'>
            <div
                className='flex justify-between items-center cursor-pointer'
                onClick={onClick}
            >
                <h4 className='text-lg font-medium'>{title}</h4>
                <IoIosArrowDropdown
                    className={`text-3xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}>
                <p className=' p-4  '>{description}</p>
            </div>

        </div>
    );
};

export default Faqcard;
