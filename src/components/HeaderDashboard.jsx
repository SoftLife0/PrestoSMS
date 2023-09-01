import React from 'react'
import { BsJustify } from 'react-icons/bs'
import softlife from '../assets/softlife.png'
import '../css/Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


function HeaderDashboard({OpenSidebar, onProfileClick, showLogout, handleLogout})  {

  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>  
        <h6>Send SMS/Email</h6> 
        {/* <form action="" className='d-flex'>
            <input type="text" placeholder='Search...'/>
            <button className='pill-button'>Search</button>
        </form> */}
        </div>
        <div className='header-right'>
        <div className='profile-details'>
            <div className='elipse' onClick={onProfileClick}>
                <img src={softlife} alt=""width={100}/>
            </div>
            {showLogout && (
            <button className='logout-button' onClick={handleLogout}>
                Logout
            </button>
        )}
            </div>
        </div>
        
    </header>
    
  )
}

export default HeaderDashboard