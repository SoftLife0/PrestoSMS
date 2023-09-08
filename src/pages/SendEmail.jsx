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
    const [toEmail, setToEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [emailContent, setEmailContent] = useState('');
    
    
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    const handleTextareaChange = (event) => {
        setTextContent(event.target.value);
    };
  
    const handleSenderNameChange = (event) => {
      setSenderName(event.target.value);
    };

    const sendEmail = async () => {
      try {
        const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: 'your-email@gmail.com', // Your Gmail email address
            pass: 'your-password', // Your Gmail password
          },
        });
  
        const mailOptions = {
          from: 'your-email@gmail.com',
          to: toEmail,
          subject: subject,
          text: emailContent,
        };
  
        await transporter.sendMail(mailOptions);
  
        alert('Email sent successfully');
        setToEmail('');
        setSubject('');
        setEmailContent('');
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Error sending email. Please check your credentials and try again.');
      }
    };

  return (
    <main className='grid-container'>
        <HeaderDashboard OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

        <div className="main-container">
            <div className="main-title">
                <h3>Send Email</h3>
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
                    {/* <FloatingLabel controlId="phoneNumber" label="Phone Number" style={{ color: 'black' }} className="mb-3">
                        <Form.Control type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </FloatingLabel> */}

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