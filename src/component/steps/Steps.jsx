import React from 'react'

const Steps = () => {
  return (
    <section className='my-32 w-5/6 m-auto'>
        <div className="text-center w-72 mx-auto">
            <h1 className="font-bold text-2xl">Ready to build with us?</h1>
            <p>Starting your journey on JARI takes only a few steps</p>
        </div>
        <div>
              <div className='flex mt-16 items-center' data-aos="zoom-in-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
                  <h1 className="font-bold rounded-full text-2xl bg-gray-300 p-10">1</h1>
                  <p className='bg-white shadow-slate-400 shadow-sm hover:shadow-lg py-8 px-8 rounded-lg'><span className='font-bold'>Create an account.</span> Let us Know You better</p>
              </div>
              <div className='flex justify-end mt-12 items-center' data-aos="zoom-in-down" data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000">
                  <p className='bg-white shadow-slate-400 shadow-sm hover:shadow-lg py-8 px-8 rounded-lg'><span className='font-bold'>Upload your business.</span> Showcase your brand and value proposition</p>
                  <h1 className="font-bold rounded-full text-2xl bg-gray-300 p-10">2</h1>
              </div>
              <div className='flex mt-16 items-center' data-aos="zoom-in-down" data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000">
                  <h1 className="font-bold rounded-full text-2xl bg-gray-300 p-10">3</h1>
                  <p className='bg-white shadow-slate-400 shadow-sm hover:shadow-lg py-8 px-8 rounded-lg'><span className='font-bold'>Start a campaign.</span> Begin your journey over a given time</p>
              </div>
        </div>
        
    </section>
  )
}

export default Steps