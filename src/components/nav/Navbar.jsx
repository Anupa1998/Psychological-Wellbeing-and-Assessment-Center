import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import UopLogo from '../../assets/crest.png';
import { MainNavData, secNavData } from './NavData';

import { Link } from 'react-router-dom';
import SearchModal from './SearchModal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const Navbar = () => {
    
    
    // hidden search bar
    

    return (
        <div className='xl:px-24 px-6 py-2 bg-[#ffffff] border-b-2 border-cusred text-gray-800'>
            <div className="flex justify-between">
                <div className=" flex space-x-2">
                    <div className='  flex justify-center items-center'>
                        <a href="/">
                            <img src={UopLogo} alt="" className='md:max-h-20 h-full max-h-16 w-auto' />
                        </a>

                    </div>
                    <div className=' flex flex-col justify-center'>
                        <h1 className=' md:text-lg font-semibold'>Psychological Wellbeing and Assessment Center</h1>
                        <p>University of Peradeniya</p>
                    </div>
                </div>
                <div className="py-6">
                    <div className="xl:block hidden">
                        <div className="flex">
                            {MainNavData.map((item, index) => (
                                <div className="mx-2 font-semibold" key={index}>
                                    <div className="flex">
                                        <p className='mr-4'>
                                            <Link to={item.link} className="text-gray-700">{item.name}</Link>
                                        </p>
                                        {item.id === 6 ? <div className=""></div> : <div className="">|</div>}
                                    </div>
                                </div>
                            ))}
                            {/* Search Icon Button */}
                            <SearchModal/>

                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Navbar;
