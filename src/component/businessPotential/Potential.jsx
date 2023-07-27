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

          <div className='grid lg:grid-cols-3 grid-cols-2 w-2/3 m-auto text-center gap-4'>
            {
                potentialCards.map(({id, number, description})=>{
                    return(
                        <div className='bg-gray-300 rounded p-4 shadow shadow-slate-700 ' key={id}>
                            <h1 className='font-bold text-2xl pb-2'>{number}</h1>
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