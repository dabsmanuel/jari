import React from 'react'
import Landingpage from '../component/Landingpage/Landingpage'
import Potential from "../component/businessPotential/Potential"
import Steps from '../component/steps/Steps'
import Testimonial from '../component/testimonial/Testimonial'
import Journey from '../component/journey/Journey'

const Home = () => {
  return (
    <>
      <Landingpage/>
      <Potential/>
      <Steps/>
      <Testimonial/>
      <Journey/>
    </>
    
  )
}

export default Home