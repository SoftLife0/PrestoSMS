import React from 'react'
import '../css/Dashboard.css'
import { useState } from 'react'
import {BiSolidMessageRoundedDetail} from 'react-icons/bi'
import {BsFillEnvelopeAtFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import HeaderDashboard from '../components/HeaderDashboard';
import Sidebar from '../components/Sidebar';

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
            <h3>My Balance</h3>
            <button className='pill-button'>Top-Up</button>
        </div>
        
        <div className="main-cards">
          <div className='card'>
              <div className='card-inner-dashboard'>
                  <h3>SMS</h3>
                  <BiSolidMessageRoundedDetail className='card_icon'/>
              </div>
              <div>
                <h6>Total Balance</h6>
                <h4>GHC12.05</h4>
                <Link>
                View Transactions
                </Link>
              </div>
          </div>

          <div className='card'>
              <div className='card-inner-dashboard'>
                  <h3>E-Mail</h3>
                  <BsFillEnvelopeAtFill className='card_icon'/>
              </div>
              <div>
                <h6>Total Balance</h6>
                <h4>GHC5.00</h4>
                <Link>
                View Transactions
                </Link>
              </div>
          </div>
        </div>
       

        {/* <div className='charts'>
            <div className='main-title'>
                <h3><b>Metrics</b></h3>
            </div>
            <LineChartComponent/>

        </div> */}
      </div>  
    </main>
  )
}

export default Dashboard