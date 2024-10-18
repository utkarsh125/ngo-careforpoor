import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Images from '../components/Images'
import React from 'react'
import Volunteer from '../components/Volunteer'

const page = () => {
  return (
    <div>
      <Hero />
      <Volunteer />
      <Images />
      <Footer />
    </div>
  )
}

export default page