import React from 'react'
import '../css/Dashboard.css'
import { useState } from 'react'
import {BiBarChartSquare, BiCalendarExclamation} from 'react-icons/bi'
import { BsFilePerson } from 'react-icons/bs'
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
            <h3>DASHBOARD</h3>
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