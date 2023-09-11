import React, { useState } from 'react';
import Papa from 'papaparse'; // Import PapaParse

function BulkMessaging() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (
      selectedFile.type === 'application/vnd.ms-excel' ||
      selectedFile.type === 'text/csv'
    ) {
      setFile(selectedFile);
    } else {
      alert('Unsupported file format. Please upload a CSV or Excel file.');
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


  return (
    <div>
      <input
        type="file"
        accept=".csv, application/vnd.ms-excel"
        onChange={handleFileUpload}
      />
      <textarea
        placeholder="Enter your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage} disabled={sending}>
        {sending ? 'Sending...' : 'Send Messages'}
      </button>
      {/* Display recipients and message sending status */}
    </div>
  );
}

export default BulkMessaging;
