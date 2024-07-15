import React from 'react'
import './css/Login.css'

const Login = () => {
  return (
    <div className="loginsinup">
      <div className="loginsinup-cotainer">
        <h1>Sign Up</h1>
        <div className="loginsinup-fields">
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Your Email"/>
          <input type="password" placeholder="Password"/>
        </div>
        <button>Continue</button>
        <p className="loginsinup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsinup-agree">
          <input type="checkbox" name="" id=""/>
          <p>By continuing,I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Login
