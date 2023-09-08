import React from 'react'
import '../css/Dashboard.css'
import {Link} from 'react-router-dom'

function Loader() {
  return (
    <main>
        <div class="loader-container">
            <figure>
                <div class="dot white"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </figure>
            <p class="loading-text">Your transaction is pending, Please wait...</p>
        </div>
    </main>
  )
}

export default Loader