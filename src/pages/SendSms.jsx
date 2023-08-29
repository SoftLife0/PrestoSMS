import React from 'react'
import '../css/Dashboard.css'
import HeaderDashboard from '../components/HeaderDashboard';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import softlife from '../assets/softlife.png'

function SendSms() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        console.log("Triggered sidebar function")
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const [inputText, setInputText] = useState('');
    const [savedText, setSavedText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSaveClick = () => {
        setSavedText(inputText);
    };

    // Convert newline characters to <br> elements
    const formattedText = savedText.replace(/\n/g, '<br>');



  return (
    <main className='grid-container'>
        <HeaderDashboard OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

        <div className="main-container">
            <div className="main-title">
                <h3>Import Number</h3>
            </div>

            <div className="phone-view">
                <div className="top-nav">
                    <div className="profile-picture">
                        <img src={softlife} alt=""width={100}/>
                    </div>
                </div>

                <div className="message-container">
                {inputText && (
                    <p className="phone-text" dangerouslySetInnerHTML={{ __html: formattedText }} />
                )}
                </div>
            </div>
            <div className="input-container">
                <textarea
                rows="4"
                cols="50"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter your SMS text here"/>
            </div>

            <button className='pill-button' onClick={handleSaveClick}>Save</button>

        </div>

    </main>
  )
}

export default SendSms