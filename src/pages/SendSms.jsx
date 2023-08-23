import React from 'react'
import '../css/Dashboard.css'
import HeaderDashboard from '../components/HeaderDashboard';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import {BiSolidMessageRoundedDetail} from 'react-icons/bi'

function SendSms() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        console.log("Triggered sidebar function")
        setOpenSidebarToggle(!openSidebarToggle)
    }


  return (
    <main className='grid-container'>
        <HeaderDashboard OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

        <div className="main-container">
            <div className="main-title">
                <h3>Import Number</h3>
            </div>
        </div>

    </main>
  )
}

export default SendSms