import React, { useState } from 'react';
import Papa from 'papaparse'; // Import PapaParse
import '../css/Dashboard.css'
import HeaderDashboard from '../components/HeaderDashboard';
import Sidebar from '../components/Sidebar';

function BulkMessaging() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    
    
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const handleFileUpload = (e) => {
        const selectedFile = e.target.files[0];
      
        if (selectedFile) {
          if (
            selectedFile.type === 'application/vnd.ms-excel' ||
            selectedFile.type === 'text/csv'
          ) {
            setFile(selectedFile);
          } else {
            alert('Unsupported file format. Please upload a CSV or Excel file.');
          }
        } else {
          alert('No file selected.'); // Handle the case where no file is selected.
        }
      };

  const handleSendMessage = async () => {
    if (!file) {
      alert('Please upload a CSV or Excel file.');
      return;
    }

    if (!message.trim()) {
      alert('Please enter a message.');
      return;
    }

    setSending(true);

    const reader = new FileReader();
    reader.onload = async (e) => {
      const fileData = e.target.result;

      if (file.type === 'application/vnd.ms-excel') {
        // Handle Excel file processing if needed
      } else if (file.type === 'text/csv') {
        // Parse CSV using PapaParse
        Papa.parse(fileData, {
          header: true, // Assuming the first row is the header
          dynamicTyping: true, // Automatically parse numeric values
          skipEmptyLines: true, // Skip empty lines
          complete: (result) => {
            // result.data contains the parsed CSV data as an array of objects
            const data = result.data;
            sendBulkMessages(data);
          },
          error: (error) => {
            console.error('CSV parsing error:', error);
          },
        });
      }

      setSending(false);
    };
    reader.readAsBinaryString(file);
  };

  const sendBulkMessages = async (data) => {
    // Customize and send messages for each recipient
    for (const recipient of data) {
      const firstName = recipient.firstName;
      const lastName = recipient.lastName;

      // Use CSV data to populate the message area
      const customizedMessage = `Hello ${firstName} ${lastName}, ${message}`;

      // Replace this with code to send messages using an SMS gateway or email service API
      // Example using a hypothetical SMS service API:
      try {
        // Send SMS here
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const sendSMS = async (contact, message) => {
    try {
      // Check if required fields are empty
      if (!contact || !message) {
        console.error('Skipping SMS send: Missing contact or message.');
        return;
      }
  
      // Define your SMS gateway API URL
      const smsApiUrl = 'YOUR_SMS_GATEWAY_API_URL_HERE';
  
      // Create the data object with the required parameters for your SMS gateway
      const smsData = {
        contact: contact, // The recipient's phone number
        message: message, // The message content
      };
  
      // Set up headers for the POST request
      const headers = {
        'Content-Type': 'application/json',
        // Add any other required headers for your SMS gateway
      };
  
      // Make the POST request using fetch or another HTTP library
      const response = await fetch(smsApiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(smsData),
      });
  
      // Check if the response status is OK (200) or handle errors as per your SMS gateway API
      if (!response.ok) {
        console.error('Error sending SMS:', response.statusText);
        // You can throw an error or handle it according to your requirements
        throw new Error('Error sending SMS');
      }
  
      // Handle the API response as needed
      const responseData = await response.json();
      console.log(`SMS sent to ${contact}:`, responseData);
  
      // Optionally, you can return the response data or handle it further
      return responseData;
    } catch (error) {
      // Handle errors
      console.error('Error sending SMS:', error);
      // You can throw an error or handle it according to your requirements
      throw error;
    }
  };

  return (
    <main className='grid-container'>
        <HeaderDashboard OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

        <div className="main-container">
            <div>

            {/* <div className="form-floating mb-3">
                <label htmlFor="" controlId="phoneNumber">Phone Number</label>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="02XXXXXXXX" type="number"/>
            </div> */}


                {/* <FloatingLabel controlId="phoneNumber" label="Phone Number" style={{ color: 'black' }} className="mb-3"> */}
                    {/* <Form.Control type="file" accept=".csv, application/vnd.ms-excel" onChange={handleFileUpload} /> */}
                {/* </FloatingLabel> */}
            <input
                type="file"
                accept=".csv, application/vnd.ms-excel"
                onChange={handleFileUpload}
            />
            <textarea
            className='inputCard'
                placeholder="Enter your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSendMessage} disabled={sending}>
                {sending ? 'Sending...' : 'Send Messages'}
            </button>
            {/* Display recipients and message sending status */}
            </div>
        </div>
    </main>
  );
}

export default BulkMessaging;
