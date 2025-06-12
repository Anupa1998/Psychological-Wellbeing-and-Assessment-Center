import React from 'react'
import AboutSectionTwo from './AboutSectionTwo'
import AboutQuotes from './AboutQuotes'
import AboutSectionFourth from './AboutSectionFourth'
import TitleHeader from '../../components/title/TitleHeader'


const AboutUs = () => {
  return (
    <div>
      <TitleHeader>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg">
          About Us
        </h2>
        <p className="text-white/90 text-sm md:text-base leading-relaxed italic">
          Empowering wellbeing through compassionate care, understanding, and evidence-based practices.
        </p>
      </TitleHeader>

      <AboutSectionTwo />
      <AboutQuotes />
      <AboutSectionFourth />
    </div>
  )
}

export default AboutUs