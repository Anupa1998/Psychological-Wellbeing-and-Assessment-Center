import React from 'react'
import imgOne from '../../assets/backgroundimage.jpg'


const TitleHeader = ({children}) => {
    return (
        <div
            className="cursor-default relative bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-start px-6 lg:px-24 h-[75vh]"
            style={{ backgroundImage: `url(${imgOne})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent backdrop-blur-sm"></div>

            <div className="relative z-10 max-w-5xl text-left text-white space-y-1">
                {children}
            </div>
        </div>
    )
}

export default TitleHeader