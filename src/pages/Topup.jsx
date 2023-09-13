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
    const [senderId, setSenderId] = useState('');
    const [amount, setAmount] = useState('');   

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const history = useHistory();

    const topUp = async () => {
        try {
          // Check if required fields are empty
          if (!network || !phoneNumber || !senderId || !amount) {
            alert('Please fill in all fields before sending the message.');
            return;
          }
      
          // Define the API URL
          const apiUrl = 'https://prestoghana.com/externalsms/topup';
          const sandboxUrl = 'http://192.168.0.112:5000/externalsms/topup';
      
          // Create the data object with the required parameters
          const data = {
            "network": network,
            "phone": phoneNumber,
            "amount": amount,
            "senderId": senderId,
          };
      
          // Set up headers for the POST request
          const headers = {
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
      
          // Check the response data for specific conditions if needed
          if (responseData.status === 'success') {
            // Payment was successful
            history.push('/success');
          } else {
            // Handle other response conditions or show an error message
            console.error('Payment Error:', responseData.error);
            // Display an error message to the user
            alert('Payment failed. Please try again later.');
          }
      
        } catch (error) {
          // Handle errors
          console.error('Error making Payment:', error);
          // Display an error message to the user
          alert('An error occurred while processing your request. Please try again later.');
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
                                <label htmlFor="network" className="form-label">Network</label>
                                <select id="network" className="inputCard" value={network} onChange={(e) => setNetwork(e.target.value)}>
                                    <option value="">Choose Network</option>
                                    <option value="MTN">MTN</option>
                                    <option value="Vodafone">Vodafone</option>
                                    <option value="AirtelTigo">AirtelTigo</option>
                                </select>
                            </div>

                            <div className="form-floating mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input id="phoneNumber" className="inputCard" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="02XXXXXXXX" type="number" />
                            </div>

                            <div className="form-floating mb-3">
                                <label htmlFor="senderId" className="form-label">Sender Id</label>
                                <input id="senderId" className="inputCard" value={senderId} onChange={(e) => setSenderId(e.target.value)} placeholder="Sender Id" type="text" />
                            </div>

                            <div className="form-floating mb-3">
                                <label htmlFor="amount" className="form-label">Amount</label>
                                <input id="amount" className="inputCard" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" type="number" />
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