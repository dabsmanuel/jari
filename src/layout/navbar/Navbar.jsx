import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png"


export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();

  if (location.pathname === '/signup' || location.pathname === '/login' || location.pathname === '/about') {
    return null; // don't render navbar on sign-up or about page
  }

    return (
        <nav className="m-auto bg-white shadow sticky top-0">
            <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex">
                <div>   
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <NavLink to="/">
                            <img src={Logo} alt="jari logo" className="w-20 px-4" />
                        </NavLink>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center px-4 space-y-8 md:flex md:space-x-6 md:space-y-0 logo">
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/campaigns">Campaigns</NavLink>
                            </li>
                            <li>
                                <NavLink to="/incubation">Incubation</NavLink>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 md:hidden sm:flex">
                    <NavLink
                        to="/login"
                        className="inline-block  px-4 py-2 text-center text-gray-500 hover:text-gray-900"
                    >
                        Log in
                    </NavLink>
                    <NavLink
                        to="/signup"
                        className="inline-block px-4 py-2 text-center text-white bg-black rounded-md shadow hover:bg-gray-800"
                    >
                        Sign up
                    </NavLink>
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <NavLink
                        to="/login"
                        className="px-4 py-2 text-gray-500 hover:text-gray-900"
                    >
                        Log in
                    </NavLink>
                    <NavLink
                        to="/signup"
                        className="px-4 py-2 text-white bg-black  rounded-md shadow hover:bg-gray-800"
                    >
                        Sign up
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}