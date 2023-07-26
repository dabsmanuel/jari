import React from 'react'
import {Link } from "react-router-dom";
import { useState } from "react";
import { FaGoogle } from 'react-icons/fa';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleGoogleSignIn = () => {
    setIsSigningUp(true);
    window.open("https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email%20profile", "_blank", "width=500,height=500");
  };

  const handleSignInSuccess = (accessToken) => {
    // TODO: handle sign in success using the access token
    console.log(accessToken);
  };

  const handleGoogleSignInCallback = () => {
    const urlParams = new URLSearchParams(window.location.hash.replace("#", ""));
    const accessToken = urlParams.get("access_token");
    if (accessToken) {
      handleSignInSuccess(accessToken);
    } else {
      setIsSigningUp(false);
    }
  };

  if (isSigningUp) {
    handleGoogleSignInCallback();
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the backend or do validation
    console.log(email, password);
  };


  return (
    <section className='lg:w-3/5 m-auto w-5/6 '>
      <div className="flex justify-between items-center mt-12">
            <Link to="/" className='font-bold text-xl'>
                Home
            </Link>
        <p>don't have an account? <Link to='/signup' className='text-gray-600 pb-1 border-b-2 border-gray-800'>signup</Link></p>
        </div>

      <div className="flex flex-col items-center rounded px-10 py-10 mt-8 mb-32 shadow shadow-zinc-950 bg-white">
        <h1 className="text-3xl font-black pb-6">Login</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md ">
          <div className="mb-4">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="mb-4">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/campaign">
            <button
              className="bg-zinc-900 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-full focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </Link>
          <div className="mt-6">
            <p className="text-gray-700 font-medium mb-2 text-center py-5">Or:</p>
            <div className="flex flex-col items-center justify-center mb-4">
              <button className="flex items-center justify-center p-2 bg-zinc-900 text-white rounded-lg shadow-lg shadow-zinc-300 hover:bg-zinc-900 hover:text-white" onClick={handleGoogleSignIn}>
                <FaGoogle /><span className="pl-4">Login with Google</span>
              </button>
            </div>
          </div>
        </form>

      </div>
    </section>
  )
}

export default Login