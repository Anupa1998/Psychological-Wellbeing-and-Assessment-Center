import React from 'react'
import FirstSection from './FirstSection'
import AboutUs from './AboutUs'
import Events from './Events'
import Quotes from './Quotes'
import Gallery from './gallery'


const Home = () => {
  return (
    <>
        <FirstSection/>
        <AboutUs/>
        <Quotes/>
        <Events/>
        <Gallery/>
    </>
  )
}

export default Home