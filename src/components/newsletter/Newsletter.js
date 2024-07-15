import React from 'react'
import './Newletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers On Your Mail</h1>
        <p>Login To Our Website </p>
        <div>
            <input type="email" placeholder='Your Email Id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
