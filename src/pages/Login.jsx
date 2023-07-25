import React from 'react'
import {Link } from "react-router-dom";


const Login = () => {
  return (
    <section>
      <div className="flex justify-between items-center mt-12">
            <Link to="/">
                Home
            </Link>
            <p>Already have an account? <Link to='/'>Login</Link></p>
        </div>
    </section>
  )
}

export default Login