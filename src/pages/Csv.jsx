import React from 'react'
import '../css/Dashboard.css'
import { useState } from 'react'
import {BiDownload} from 'react-icons/bi'
import HeaderDashboard from '../components/HeaderDashboard'
import Sidebar from '../components/Sidebar';


function Csv() {
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
                <h3>Upload CSV file to import data</h3>
            </div>
            <br />
            <form id="file-upload-form" className="uploader">
                <label htmlFor="file-upload" id="file-drag">
                    <div className="start">
                        <BiDownload aria-hidden="true" className='csv-icon'/>
                        <h5>Select a File or kindly drag here</h5>
                        <span id="file-upload-btn" className="pill-button">Click to browse</span>
                    </div>
            </label>    
            {/* <input id="file-upload" type="file" name="fileUpload"/> */}
            </form>
        </div>

    </main>
  )
}

export default Csv