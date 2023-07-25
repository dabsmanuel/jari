import {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { footerSocials, quickLinks, clientSupport } from '../../data'
import footerLogo from "../../assets/footerLogo.png"



const Footer = () => {
    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])

    const location = useLocation();

//   if (location.pathname === '/signup' || location.pathname === '/login') {
//     return null; // don't render navbar on sign-up or login page
//   }

  return (
    <section className='bg-black text-white py-6'>
        <div className="w-5/6 m-auto px-4 pb-4">
            <div className="flex justify-between items-center">
                <div>
                    <img src={footerLogo} alt="jari logo" className="w-16" />
                </div>
                <div className='flex space-x-4'>
                    {
                        footerSocials.map(({id, icon, link})=>{
                            return(
                                <div key={id} className=" bg-white  rounded-2xl text-black p-1 lg:p-2 hover:text-white hover:bg-zinc-700">
                                    <Link to={link}>
                                        {icon}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-5 w-3/4 m-auto lg:w-1/2">
            <div>
                <h2 className='font-bold'>Quick Links</h2>
                {
                    quickLinks.map(({id, title, link})=>{
                        return(
                            <div key={id} className="text-sm pb-3">
                                <Link to={link}>
                                    {title}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <h2 className='font-bold'>clients support</h2>
                {
                    clientSupport.map(({id, title, link})=>{
                        return(
                            <div key={id} className="text-sm pb-3">
                                <Link to={link} className="text-sm">
                                    {title}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <h2 className='font-bold'>Our News</h2>
                <div className="text-sm">
                    <Link to="/signup">Join crowdfunding</Link>
                    <small className='flex font-extralight pt-2'>26 APRIL 2023</small>
                    <small className='flex font-extralight pb-1'>BY BATMAN</small>
                    <a href='https://nhubfoundation.org'>Nhub Foundation</a>
                    <Link to="/about">Product information</Link>
                </div>
                
            </div>
        </div>
        <div className="text-center pt-8 pb-6 text-white text-sm">
        <p>&copy; Jari all rights reserved Copyrights {date}</p>
      </div>
    </section>
  )
}

export default Footer