import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sms from '../assets/sms.png'
// import { Link } from 'react-router-dom';



function Home() {
  return (
    <main className='hero'>
      <Container>
        <Row>
          <Col md={8}>
              <Link to='/login' className='pill-button'>
                Send SMS
                <span className='badge'>1</span>
              </Link>
            <div className='hero-title'>
              <h2>Bulk SMS Platform </h2>
              <p>A powerful and efficient commuication tool designed to streamline the process of sending large volumes of text messages to multiple recipients simultaneously. It provdes business, organization and individuals with a convinent way to engage and inform their target audience in a timely manner.</p>
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
