import React from 'react'
import './servicecardstyle.css'

const ServiceCard = ({ title, icon, subtitle, description, bullets, closing }) => {
    return (
        <div className="group item group cursor-pointer rounded-lg">
            <div className='flex items-center mb-8'>
                <div className="w-16 h-16 bg-cuswebyellow rounded-full p-2 flex justify-center items-center border-3 border-cusred group-hover:border-white duration-300">
                    {icon}
                </div>

                <div className='text-left ml-2'>
                    <h3 className="text-xl font-semibold text-cusred">
                        {title}
                    </h3>
                    <h4 className="font-medium text-cuswebyellow group-hover:text-white duration-300">
                        {subtitle}
                    </h4>
                </div>
            </div>

            <p className="mb-2 text-gray-800">
                {description}
            </p>

            {Array.isArray(bullets) && bullets.length > 0 && (
                <ul className="list-[square] list-inside mb-2 text-gray-800 marker:text-cuswebyellow group-hover:marker:text-white">
                    {bullets.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            )}

            {closing && (
                <p className="text-gray-800">
                    {closing}
                </p>
            )}
        </div>

    )
}

export default ServiceCard