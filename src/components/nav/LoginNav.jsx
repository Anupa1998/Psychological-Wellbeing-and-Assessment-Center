import React from 'react'
import UopLogo from '../../assets/crest.png';



const LoginNav = () => {
    return (
        <nav className='sticky top-0 w-full bg-cusred px-6 lg:px-24 py-4 z-50'>
            <div className='flex items-center space-x-2'>
                <a href="/">
                    <img src={UopLogo} alt="" className='md:max-h-10 h-full max-h-10 w-auto' />
                </a>
                <div>
                    <h2 className=' text-gray-100 text-md font-medium'>Psychological Wellbeing and Assessment Center</h2>

                    
                </div>
            </div>
        </nav>
    )
}

export default LoginNav