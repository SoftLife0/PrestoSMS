import React from 'react';
import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBCheckbox,MDBIcon} from 'mdb-react-ui-kit';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {FaFacebook, FaGooglePlusG} from 'react-icons/fa'


function App() {
  return (
    <section className='p-4 background-radial-gradient overflow-hidden'>
        <MDBContainer style={{padding: '0 0 10vh 0'}}>

        <MDBRow>

            <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

            <h2 className="my-5 display-4 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
                Send Bulk SMS<br />
                <span style={{color: 'hsl(218, 81%, 75%)'}}>at affordable rates</span>
            </h2>

            <p className='px-3' style={{color: '#fff', fontSize:'18px', fontWeight:'500'}}>
            A powerful and efficient commuication tool designed to streamline the process of sending large volumes of text messages to multiple recipients simultaneously.
            </p>

            </MDBCol>

            <MDBCol md='6' className='position-relative'>

            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <MDBCard className='my-5 bg-glass'>
                <MDBCardBody className='p-4'>

                    <FloatingLabel controlId="floatingInput" label="Name of Organization" className="mb-3">
                        <Form.Control type="text" placeholder="Presto Ghana" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>

                    <MDBBtn className='mb-4 w-100 pill-button' size='md' style={{margin: '3vh 0 0 0'}}>Sign up</MDBBtn>
                    <hr style={{margin: '0'}}/>

                <MDBBtn className="mb-4 w-100 pill-button" size="md" style={{backgroundColor: '#dd4b39',margin: '3vh 0 0 0' }}>
                    <FaGooglePlusG className='mx-2'/>Sign in with google
                </MDBBtn>

                <MDBBtn className="mb-4 w-100 pill-button" size="md" style={{backgroundColor: '#3b5998'}}>
                    <FaFacebook className='mx-2'/>Sign in with facebook
                </MDBBtn>



                </MDBCardBody>
            </MDBCard>

            </MDBCol>

        </MDBRow>

        </MDBContainer>
    </section>
  );
}

export default App;