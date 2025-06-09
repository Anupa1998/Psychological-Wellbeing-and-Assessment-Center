import React from 'react'
import imgOne from '../../assets/backgroundimage.jpg'


const AboutUsSectionOne = () => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-start px-6 lg:px-24 h-[75vh]"
      style={{ backgroundImage: `url(${imgOne})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-3xl text-left text-white space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg">
          About Us
        </h2>
        <p className="text-white/90 text-sm md:text-base leading-relaxed italic">
          Empowering wellbeing through compassionate care, understanding, and evidence-based practices.
        </p>
      </div>
    </div>
  )
}

export default AboutUsSectionOne