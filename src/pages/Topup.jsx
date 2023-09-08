import React from 'react'
import '../css/Dashboard.css'
import HeaderDashboard from '../components/HeaderDashboard';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom'; // Import useHistory from React Router


function Topup() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [network, setNetwork] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');   

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const history = useHistory();

    const topUp = async () => {
    try {
        // Check if required fields are empty
        if (!network || !phoneNumber || !amount) {
        alert('Please fill in all fields before sending the message.');
        return;
        }
    
        // Debug: Log the values
        console.log('Network:', network);
        console.log('Phone Number:', phoneNumber);
        console.log('Amount:', amount);
    
        // Define the API URL
        const apiUrl = 'https://prestoghana.com';
        const sandboxUrl = 'http://192.168.0.111:5000/externalsms/topup';
    
        // Create the data object with the required parameters
        const data = {
        "network": network, // Assuming senderName is used as senderId
        "phone": phoneNumber,
        "amount": amount,
        };
    
        // Set up headers for the POST request
        const headers = {
        'Origin': 'http://192.168.0.114:5173',
        'Access-Control-Allow-Origin': 'http://192.168.0.114:5173',
        'Content-Type': 'application/json',
        // Add any other required headers
        };
    
        // Make the POST request using fetch
        const response = await fetch(sandboxUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
        });
    
        // Check if the response status is OK (200)
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
    
        // Parse the response data as needed (assuming JSON)
        const responseData = await response.json();
    
        // Handle the API response as needed
        console.log('Payment Successful:', responseData);

    //   if (!responseData.status) {
        console.log(responseData.status)
    //   }
        
        // Use history.push() to navigate to /success
        history.push('/success');

    //   // Optionally, clear the input fields after sending
        // setSenderName('');
        // setPhoneNumber('');
        // setTextContent('');

    } catch (error) {
        // Handle errors
        console.error('Error making Payment:', error);
    }
    };

  return (
    <main className='grid-container'>
        <HeaderDashboard OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

        <div className="main-container">
            {/* <div className="main-title">
                <h3>Balance Top-Up </h3>
            </div> */}
            
            <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <div className="row" style={{ justifyContent: 'space-around', marginTop: '2vh' }}>

                    <div className="col">
                        <div className="defaultCard">
                            <form action="">    
                            
                            <h1 className="heading" style={{ textAlign: 'center', marginTop: '1vh' }}><b>Top-up account balance</b></h1>
                            <h6 className='text-muted' style={{ textAlign: 'center', width: '100%' }}>Kindly fill-in the form below</h6>

                            <div className="form-floating mb-3">
                                <label htmlFor="" controlId="network">Network</label>
                                {/* <input className="inputCard" value={network} onChange={(e) => setNetwork(e.target.value)} placeholder="Choose Network" type="text"/> */}
                                <select className="inputCard" value={network} onChange={(e) => setNetwork(e.target.value)}>
                                    <option value="">Choose Network</option>
                                    <option value="MTN">MTN</option>
                                    <option value="Vodafone">Vodafone</option>
                                    <option value="AirtelTigo">AirtelTigo</option>
                                </select>
                            </div>

                            <div className="form-floating mb-3">
                                <label htmlFor="" controlId="phoneNumber">Phone Number</label>
                                <input className="inputCard" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="02XXXXXXXX" type="number"/>
                            </div>

                            <div className="form-floating mb-3">
                                <label htmlFor="" controlId="amount">Amount</label>
                                <input className="inputCard" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" type="number"/>
                            </div>


                            <Link to="/loader">
                                <input className="pill-button" onClick={topUp} style={{ width: '100%', marginTop: '5vh' }} type="submit" value="Confirm Payment"/>
                            </Link>
                            </form>
                        </div>
                    {/* <h6 style={{ textAlign: 'center', marginTop: '2vh', textDecoration: 'none' }}>
                        Get Onboard <Link to="/signup" style={{ textAlign: 'center', textDecoration: 'none' }}><b>Sign Up</b></Link>
                    </h6> */}

                    </div>
                </div>
            </div>

        </div>

    </main>    
  )
}

export default Topup