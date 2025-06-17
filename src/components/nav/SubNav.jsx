import React, { useEffect, useState } from 'react'
import { secNavData } from './NavData'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import uoplogo from '../../assets/uoplogo.png'
import { Link } from 'react-router-dom';
import NavMenuMobile from './NavMenuMobile';
import { motion, AnimatePresence } from 'framer-motion';


const SubNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className=" sticky top-0 z-30">
            <div className='w-full px-6 lg:px-24 py-4 bg-cusred text-cuswhite '>
                <div className=' hidden lg:block'>
                    <ul className=' flex space-x-8'>
                        {
                            secNavData.map((ele, index) => (
                                <Link to={ele.link} >

                                    <li className=' font-medium border-b-2 border-transparent duration-300 hover:border-cuswhite'> {ele.name}</li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>

                <div className='  lg:hidden flex justify-end transform duration-200'>
                    {
                        menuOpen ? (
                            <IoClose className="h-8 w-auto cursor-pointer " onClick={handleMenuOpen} />
                        ) : (
                            <TiThMenu className="h-8 w-auto cursor-pointer " onClick={handleMenuOpen} />
                        )
                    }
                </div>

                {/* <AnimatePresence>

                    {
                        menuOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}

                                className=' py-4 px-6 absolute top-full left-0 w-full lg:hidden bg-cusred transition-all duration-300 ease-in-out opacity-100 scale-100'>
                                <ul className=' space-y-4'>
                                    {
                                        secNavData.map((ele, index) => (

                                            <li className=' font-medium border-transparent '>
                                                <Link to={ele.link} >
                                                    {ele.name}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </motion.div>
                        )
                    }
                </AnimatePresence> */}

                {/* <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            key="mobile-nav"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute top-full left-0 w-full lg:hidden bg-cusred px-6 py-4 z-50 overflow-hidden"
                        >
                            <ul className="space-y-4">
                                {secNavData.map((ele, index) => (
                                    <li key={index} className="font-medium">
                                        <Link to={ele.link} onClick={() => setMenuOpen(false)}>
                                            {ele.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence> */}

                {/* <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            key="mobile-nav"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }} // this slides up on exit
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute top-full left-0 w-full lg:hidden bg-cusred px-6 py-4 z-50"
                        >
                            <ul className="space-y-4">
                                {secNavData.map((ele, index) => (
                                    <li key={index} className="font-medium">
                                        <Link to={ele.link} onClick={() => setMenuOpen(false)}>
                                            {ele.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence> */}


                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            key="mobile-nav"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute top-full left-0 w-full lg:hidden bg-cusred px-6 py-4 z-50 shadow-md"
                        >
                            <ul className="space-y-4">
                                {secNavData.map((ele, index) => (
                                    <li key={index} className="font-medium">
                                        <Link to={ele.link} onClick={() => setMenuOpen(false)}>
                                            {ele.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>



            </div>
        </div>
    )
}

export default SubNav