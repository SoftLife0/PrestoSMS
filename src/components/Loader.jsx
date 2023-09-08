import React from 'react'
import '../css/Dashboard.css'
import {Link} from 'react-router-dom'

function Loader() {
  return (
    <main>
        <div className="loader-container">
            <figure>
                <div className="dot white"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </figure>
            <p className="loading-text">Your transaction is been processed, Please wait...</p>
        </div>
    </main>
  )
}

export default Loader