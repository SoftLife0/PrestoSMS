import React from 'react'
import '../css/Dashboard.css'
import HeaderDashboard from '../components/HeaderDashboard';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import softlife from '../assets/softlife.png'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FloatingLabel, Form } from 'react-bootstrap';
import { BiSolidCloudUpload } from "react-icons/bi";
import {BsFillSendCheckFill} from "react-icons/bs"
import { Picker } from 'emoji-mart';




function SendSms() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        console.log("Triggered sidebar function")
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const [textareaContent, setTextareaContent] = useState('');
    // const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  
    const handleTextareaChange = (event) => {
        setTextareaContent(event.target.value);
    };

    // const handleEmojiSelect = (emoji) => {
    //     setTextareaContent(textareaContent + emoji.native);
    //     setShowEmojiPicker(false);
    // };

    const [senderName, setSenderName] = useState(''); // Default sender's name

    const handleSaveClick = () => {
        setSavedText(inputText);
    };



    const handleSenderNameChange = (event) => {
        setSenderName(event.target.value);
    };



  return (
    <main className='grid-container'>
        <HeaderDashboard OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

        <div className="main-container">
            <div className="main-title">
                <h3>Import Numbers</h3>
            </div>

            <div className="container">
            <div className="row">
            <div className="col-md-8 order-md-1 order-2">
                <div className="input-container">

                    <div className="file-upload-box">
                        <input type="file" id="fileInput" className="file-input" />
                        <label htmlFor="fileInput" className="file-label">
                            UPLOAD FILE
                            <BiSolidCloudUpload className='upload-icon'/>
                        </label>
                    </div>
                    <div style={{color:'#000'}}>
                    <h5>CONTACTS.xlsx</h5>
                    <h6><b>For Personalized, download sample file to edit:</b> <strong style={{color: 'red', padding: '3px'}}> CSV  EXCEL  NOTEPAD </strong>  </h6>
                    </div>

                    <div style={{marginTop: '8vh', paddingBottom: '4vh'}}>
                        <FloatingLabel controlId="floatingTextarea" label="Sender's Name" style={{color:'black'}} className="mb-3" >
                            <Form.Control as="textarea" value={senderName} onChange={handleSenderNameChange} placeholder="Sender's Name" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingTextarea2" label="Enter your SMS text here" style={{color:'black'}}>
                            <Form.Control as="textarea" value={textareaContent} onChange={handleTextareaChange} placeholder="Enter your SMS text here" style={{ height: '100px' }}/>
                            {/* <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>Toggle Emoji Picker</button>
                            {showEmojiPicker && (
                                <Picker onSelect={handleEmojiSelect} />
                            )}                         */}
                        </FloatingLabel>
                    </div>
                </div>
                
                <div style={{marginBottom: '7vh'}}>
                    <button className='pill-button' onClick={handleSaveClick}>Send Message <BsFillSendCheckFill className='upload-icon' style={{fontSize: '18px'}}/></button>
                </div>

            </div>
            <div className="col-md-4 order-md-2 order-1" style={{ marginBottom: '3vh' }}>
            <div className="phone-screen">
                <div className="phone-view">
                <div className="top-nav">
                    <div className="profile-picture">
                    <img src={softlife} alt="" width={100} />
                    </div>
                    {/* Sender's name */}
                    <div className="sender-name text-center" style={{ fontWeight: '800', color: '#000' }}>
                    {senderName}
                    </div>
                </div>
                <div className="message-container">
                {textareaContent && (
                    <p className="phone-text" dangerouslySetInnerHTML={{ __html: textareaContent.replace(/\n/g, '<br>') }} />
                )}
                </div>
                </div>
            </div>
            </div>

            </div>
            </div>
        </div>

    </main>
  )
}

export default SendSms