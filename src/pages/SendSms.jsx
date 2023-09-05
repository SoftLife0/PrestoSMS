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
import axios from 'axios';

// import { Picker } from 'emoji-mart';


function SendSms() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    // const [textareaContent, setTextareaContent] = useState('');
    const [senderName, setSenderName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [textContent, setTextContent] = useState('');
    
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    const handleTextareaChange = (event) => {
        setTextContent(event.target.value);
    };
  
    const handleSenderNameChange = (event) => {
      setSenderName(event.target.value);
    };
  
    const sendSMS = async () => {
        try {
          // Check if required fields are empty
          if (!phoneNumber || !senderName || !textContent) {
            alert('Please fill in all fields before sending the message.');
            return;
          }
      
          // Debug: Log the values
          console.log('Phone Number:', phoneNumber);
          console.log('Sender Name:', senderName);
          console.log('Text Content:', textContent);
      
          // Define the API URL
          const apiUrl = 'https://prestoghana.com/notify/sendSms';
      
          // Create the data object with the required parameters
          const data = {
            phone: phoneNumber,
            senderId: senderName, // Assuming senderName is used as senderId
            textareaContent: textContent,
          };
      
          // Make the POST request to the API
          const response = await axios.post(apiUrl, data);
      
          // Handle the API response as needed
          console.log('SMS sent successfully:', response.data);
      
          // Optionally, clear the input fields after sending
          setSenderName('');
          setPhoneNumber('');
          setTextContent('');
        } catch (error) {
          // Handle errors
          console.error('Error sending SMS:', error);
        }
      };
      
  

  return (
    <main className='grid-container'>
        <HeaderDashboard OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

        <div className="main-container">
            <div className="main-title">
                <h3>Import Numbers</h3>
            </div>

            <div className="container-fluid">
            <div className="row">
            <div className="col-md-8 order-md-1 order-2">
                <div className="input-container">
                {/* <h6>For Bulk SMS kindly import file </h6> */}

                    <div style={{color:'#000'}}>
                    <h5>CONTACTS.xlsx</h5>
                    <h6><b>For Bulk Messaging, download sample file to edit:</b> <strong style={{color: 'red', padding: '3px'}}> CSV  EXCEL  NOTEPAD </strong>  </h6>
                    <div className="file-upload-box">
                        <input type="file" id="fileInput" className="file-input" />
                        <label htmlFor="fileInput" className="file-label">
                            UPLOAD FILE
                            <BiSolidCloudUpload className='upload-icon'/>
                        </label>
                    </div>
                    </div>

                    <div style={{marginTop: '8vh', paddingBottom: '4vh'}}>
                    <FloatingLabel controlId="phoneNumber" label="Phone Number" style={{ color: 'black' }} className="mb-3">
                        <Form.Control type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel controlId="senderName" label="Sender's ID" style={{ color: 'black' }} className="mb-3">
                        <Form.Control type="text" value={senderName} onChange={handleSenderNameChange} />
                    </FloatingLabel>

                    <FloatingLabel controlId="textContent" label="Enter your SMS text here" style={{ color: 'black' }}>
                        <Form.Control as="textarea" value={textContent} onChange={handleTextareaChange} style={{ height: '100px' }} />
                    </FloatingLabel>

                    {/* <Form>
                        
                        <Form.Group controlId="textContent">
                        <Form.Label>Enter your SMS text here</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={textContent}
                            onChange={(e) => setTextContent(e.target.value)}
                        />
                        </Form.Group>
                        
                    </Form> */}
   
                    </div>
                </div>
                
                <button className="pill-button" onClick={sendSMS}> Send Message <BsFillSendCheckFill className="upload-icon" style={{ fontSize: '18px' }} /></button>


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
                {textContent && (
                    <p className="phone-text" dangerouslySetInnerHTML={{ __html: textContent.replace(/\n/g, '<br>') }} />
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