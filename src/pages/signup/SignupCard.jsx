import React from 'react'
import footerLogo from "../../assets/footerLogo.png"
import upwardVector from "../../assets/svg-vector.png"


const SignupCard = () => {
  return (
    <section className='bg-zinc-500 px-10 py-3 rounded-lg mt-8 mb-32 shadow-md shadow-zinc-950'>
        <div className='flex justify-between items-center'>
            <img src={footerLogo} alt="jari logo" className="w" />
            <img src={upwardVector} alt="vectorimage" className="w-12" />
        </div>
        <h1 className='font-extrabold text-white text-5xl flex w-full justify-center items-center mx-auto h-96'>Let's Begin!</h1>
        <img src={upwardVector} alt="vectorimage" className="w-12" />
        <img src={upwardVector} alt="vectorimage" className="w-12" />
    </section>
  )
}

export default SignupCard