import React from 'react'
import {Link } from "react-router-dom";
import SignupCard from './SignupCard';
import Logincard from "./Logincard"


const Login = () => {
  return (
    <section className='lg:w-3/5 m-auto w-5/6'>
      <div className="flex justify-between items-center mt-8">
        <Link to="/" className='font-black'>
            Home
        </Link>
        <p>Already have an account? <Link to='/login' className='text-gray-500'>Login</Link></p>
      </div>
      <div className="cards lg:grid grid-cols-2 gap-6 mb-12">
        <SignupCard/>
        <Logincard/>
      </div>
    </section>
  )
}

export default Login