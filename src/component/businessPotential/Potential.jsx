import React from 'react'
import { potentialCards } from '../../data'

const Potential = () => {
  return (
    <section>
        <div className="flex flex-row items-center justify-center w-full my-16">
            <hr className="flex-grow-1 h-px my-8 mx-4 bg-gray-600 border-0 rounded dark:bg-gray-700" />
            <h1 className="text-center mx-auto font-bold text-2xl w-4/3 lg:w-1/3">
                Unlock the potential of your business with the support of the crowd
            </h1>
            <hr className="flex-grow-1 h-px my-8 mx-4 bg-gray-600 border-0 rounded dark:bg-gray-700" />
        </div>

        <div className='flex justify-center space-x-8 lg:space-x-24 mb-16 w-5/6 mx-auto'>
            {
                potentialCards.map(({id, number, description})=>{
                    return(
                        <div className='bg-gray-300 rounded-md p-6  text-center shadow-md shadow-slate-700 hover:bg-gray-200' key={id}>
                            <h1 className='font-bold text-2xl pb-4'>{number}</h1>
                            <p>{description}</p>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Potential