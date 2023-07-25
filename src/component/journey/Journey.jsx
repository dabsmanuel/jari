import React from 'react'
import upwardVector from "../../assets/upward-vector.png"
import invertedVector from "../../assets/inverted-vector.png"
import { Link } from 'react-router-dom'


const Journey = () => {
  return (
    <section className='w-5/6 mx-auto mb-32'>
        <div className="bg-gray-300 rounded-md p-6 shadow-md shadow-gray-600">
            <div className='flex justify-end'>
                <img src={upwardVector} alt="" />
            </div>
            <div>
                <h2 className='text-3xl font-black lg:w-5/12 w-full pb-8'>Start your Journey with us today</h2>
                <div className='block lg:flex space-x-10 items-center'>
                    <Link 
                        to="/signup"className="inline-block px-16 lg:px-32 py-2 text-center text-white bg-black rounded shadow hover:bg-gray-700">
                        Sign up
                    </Link>
                    <Link to="/faq text-gray-50 hover:text-gray-800">
                        FAQs
                    </Link>
                </div>
            </div>
            <div className='flex justify-start pt-8'>
                <img src={invertedVector} alt="" />
            </div>
        </div> 
    </section>
  )
}

export default Journey