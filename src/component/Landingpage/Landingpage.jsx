import React from 'react'
import vector from "../../assets/Vector.png"
import './Landingpage.css'

const Landingpage = () => {
  return (
    <section className='landingpage'>
      <div className='flex w-5/6 justify-center items-center mx-auto h-screen'>
          <div className='text-white px-3'> 
            <h1 className='text-4xl lg:text-5xl font-bold pb-6'>Get the funding you need to, Grow, Expand and Thrive</h1>
            <p>Invest in your business with the help of like minded individuals...</p>
            <p>Access capital from a community that believes in your vision</p>
          </div>
            <img src={vector} alt="hands together" className='lg:flex hidden' />
      </div>
    </section>
  )
}

export default Landingpage