import React from 'react'
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/Logo.png"


const About = () => {
  return (
    <section className='w-5/6 mx-auto h-screen'>
        <div className="flex justify-between items-center mt-12">
            <NavLink to="/">
                <img src={Logo} alt="jari logo" className="w-18" />
            </NavLink>
            <Link to="/" className='font-black text-xl'>Back</Link>
        </div>
        <div className="flex w-5/6 justify-center items-center mx-auto flex-col mt-24">
            <h1 className="text-5xl font-bold pb-8 ">About JARI</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni iusto recusandae neque delectus. Debitis sunt quo facere odio earum rem quibusdam. Voluptatum ipsam quod eius mollitia obcaecati veritatis pariatur facere dolore doloremque, error architecto necessitatibus nihil, quis similique repellat reprehenderit, natus unde consequatur fugit sit. Iste quasi ratione earum nihil praesentium accusantium in sed, animi obcaecati nam facilis sequi expedita eligendi aperiam delectus dignissimos reprehenderit. Nulla itaque quo, inventore cupiditate atque numquam officia eum, esse ea quidem quaerat, modi veniam dignissimos minus repudiandae dolor tempora iure eveniet deserunt. Dolores cum soluta ullam pariatur voluptates? Sunt sequi commodi voluptatum ratione labore!</p>
        </div>
    </section>
  )
}

export default About