import React from 'react'
import backgroundImage from '../../assets/backgroundimage.jpg'


const Quotes = () => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-center h-[60vh]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Quote Box */}
      <div data-aos="zoom-in" className="relative z-10 max-w-3xl text-center text-white px-6 py-8  rounded-2xl animate-fade-in-up">
        <p className="text-xl md:text-2xl font-medium leading-relaxed">
          “You don’t have to be positive all the time. It’s perfectly okay to feel
          sad, angry, annoyed, frustrated, scared, or anxious. Having feelings
          doesn’t make you a ‘negative person.’ It makes you human.”
        </p>
        <span className="block mt-4 text-right italic text-sm text-white/80">
          – Lori Deschene
        </span>
      </div>
    </div>

  )
}

export default Quotes