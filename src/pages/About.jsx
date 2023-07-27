import React from 'react'
import { NavLink, Link } from "react-router-dom";


const About = () => {
  return (
    <section className=''>
      <div className="flex justify-between items-center w-full sticky top-0 border-b-2 bg-white z-10 h-20 px-8">
        <NavLink to="/">
          <h2 className="logo text-xl font-bold">KOBRI</h2>

        </NavLink>
        <Link to="/" className='font-black text-xl hover:text-gray-500'>Back</Link>
      </div>
      <div className="flex w-5/6 justify-center h-screen items-center mx-auto flex-col">
        <h1 className="lg:text-5xl text-2xl font-bold pb-6  mt-10">About KOBRI</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni iusto recusandae neque delectus. Debitis sunt quo facere odio earum rem quibusdam. Voluptatum ipsam quod eius mollitia obcaecati veritatis pariatur facere dolore doloremque, error architecto necessitatibus nihil, quis similique repellat reprehenderit, natus unde consequatur fugit sit. Iste quasi ratione earum nihil praesentium accusantium in sed, animi obcaecati nam facilis sequi expedita eligendi aperiam delectus dignissimos reprehenderit. Nulla itaque quo, inventore cupiditate atque numquam officia eum, esse ea quidem quaerat, modi veniam dignissimos minus repudiandae dolor tempora iure eveniet deserunt. Dolores cum soluta ullam pariatur voluptates? Sunt sequi commodi voluptatum ratione labore!</p>
      </div>
    </section>
  )
}

export default About