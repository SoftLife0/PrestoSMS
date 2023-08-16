import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sms from './assets/sms.png'


function Home() {
  return (
    <main className='hero'>
      <Container>
        <Row>
          <Col md={8}>
            <button className='pill-button'>
              Send SMS
            </button>
            <div className='hero-title'>
              <h1>Bulk SMS Platform </h1>
              <p>A powerful and efficient communication tool designed to streamline the process of sending large volumes of text messages to multiple recipients simultaneously. It provides businesses, organizations, and individuals with a convenient way to engage and inform their target audiences in a timely manner.</p>
            </div>
          </Col>
          <Col md={4}>
            <img src={sms} className='img-fluid'/>
          </Col>
        </Row>
      </Container>
    </main>
  )
}


export default Home
