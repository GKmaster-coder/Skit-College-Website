import React from 'react'
import HeroSection from '../components/HeroSection'
import WhyChooseUs from '../components/WhyChooseUs'
import AboutUs from '../components/AboutUs'
import Features from '../components/Features'
import FAQ from '../components/FAQ'
import LogoMarquee from '../components/LogoMarquee'

const HomePage = () => {
  return (
   <>
   <HeroSection/>
   <AboutUs/>
    <LogoMarquee/>
   <WhyChooseUs/>
   <Features/>
   <FAQ/>
   </>
  )
}

export default HomePage
