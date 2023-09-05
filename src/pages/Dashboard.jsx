import React from 'react'
import '../css/Dashboard.css'
import { useState } from 'react'
import {BiSolidMessageRoundedDetail} from 'react-icons/bi'
import {BsFillEnvelopeAtFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import HeaderDashboard from '../components/HeaderDashboard';
import Sidebar from '../components/Sidebar';
import LineChart from '../components/LineChart';

// import LineChart from '../components/LineChart';

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    console.log("Triggered sidebar function")
    setOpenSidebarToggle(!openSidebarToggle)
  }


  return (
    <main className='grid-container'>
      <HeaderDashboard OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className='main-container'>
        <div className='main-title'>
            <h3><b>My Dashboard</b></h3>
            <button className='pill-button'>Top-Up</button>
        </div>
        
        <div className="main-cards">
          <div className='card'>
              <div className='card-inner-dashboard'>
                  <h3>Delivered Message</h3>
                  <span style={{fontSize: '22px'}}>✅ </span>
                  {/* <BiSolidMessageRoundedDetail className='card_icon'/> */}
              </div>
              <div>
                <h6>Total Count</h6>
                <h4>1293</h4>
                <Link to="/">
                View Transactions
                </Link>
              </div>
          </div>

          <div className='card'>
              <div className='card-inner-dashboard'>
                  <h3>UnSucessful Message</h3>
                  <span style={{fontSize: '22px'}}>❌</span>
                  {/* <BsFillEnvelopeAtFill className='card_icon'/> */}
              </div>
              <div>
                <h6>Total Count</h6>
                <h4>14</h4>
                <Link to="/">
                View Transactions
                </Link>
              </div>
          </div>

          <div className='card'>
              <div className='card-inner-dashboard'>
                  <h3>Balance </h3>
                  <span style={{fontSize: '24px'}}> 💰</span>
                  {/* <BsFillEnvelopeAtFill className='card_icon'/> */}
              </div>
              <div>
                <h6>Total Balance</h6>
                <h4>GHC129.00</h4>
                <Link to="/">
                View Transactions
                </Link>
              </div>
          </div>
        </div>
       

        <div className='charts'>
            <div className='main-title'>
                <h3><b>Metrics</b></h3>
            </div>

            {/* <LineChart /> */}


        </div>
      </div>  
    </main>
  )
}

export default Dashboard