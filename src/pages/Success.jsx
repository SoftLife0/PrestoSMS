import React from 'react'
import success from '../assets/success.png'
import '../css/Dashboard.css'
import {Link} from 'react-router-dom'

function Success() {
  return (
    <main>
        <div className="success-body">
            <img src={success} alt="" width={100} />
            <h2>Payment Successful !</h2>
            <p>We are delighted to inform you that we received your payments</p>

            <Link to="/dashboard">
              <button className='pill-button' style={{background: '#6dc747'}}>Back to Homepage </button>
            </Link>
        </div>
    </main>
  )
}

export default Success