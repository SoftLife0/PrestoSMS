import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header';


function Login() {
  return (
    <section>
        <Header/>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <div className="row" style={{ justifyContent: 'space-around', marginTop: '5vh' }}>
        <div className="col">
            <br/>
          
            <form action="">    
              
              <h1 className="heading" style={{ textAlign: 'center', marginTop: '1vh' }}><b>Sign in to your account</b></h1>
              <h6 style={{ textAlign: 'center', width: '100%' }}>
                <b>Welcome back to your Dashboard</b>
              </h6>

              <div>
                <input className="inputCard" placeholder="Enter your email" type="email"/>
              </div>
              <div>
                <input className="inputCard" placeholder="Enter your password" type="password"/>
              </div>

              <br />

              <Link to="/dashboard">
                <input className="pill-button" style={{ width: '100%', marginTop: '5vh' }} type="submit" value="Login"/>
              </Link>
            </form>

          <h6 style={{ textAlign: 'center', marginTop: '2vh', textDecoration: 'none' }}>
            Get Onboard <Link to="/signup" style={{ textAlign: 'center', textDecoration: 'none' }}><b>Sign Up</b></Link>
          </h6>

        </div>
      </div>
    </div>

    </section>
  )
}

export default Login