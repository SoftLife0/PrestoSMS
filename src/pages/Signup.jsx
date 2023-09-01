import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header';


function Signup() {
  return (
    
    <section>
        <Header/>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <div className="row" style={{ justifyContent: 'space-around', marginTop: '5vh' }}>
        <div className="col">
            <form action="">

              <h1 className="heading" style={{ textAlign: 'center', marginTop: '1vh' }}><b>Create your account</b></h1>
              <h6 style={{ textAlign: 'center', width: '100%' }}>
                <b>Start your journey with us today.</b>
              </h6>

              <div>
                <input className="inputCard" placeholder="Enter Preferred Business Name" type="text"/>
              </div>
              <div>
                <input className="inputCard" placeholder="Enter your email" type="text"/>
              </div>
              <div>
                <input className="inputCard" placeholder="Enter your number" type="text"/>
              </div>
              <div>
                <input
                  className="inputCard" placeholder="Enter your password" type="password"/>
              </div>

              <br />
              <input className="pill-button" style={{ width: '100%', marginTop: '5vh' }} type="submit" value="Sign Up"/>
            </form>

          <h6 style={{ textAlign: 'center', marginTop: '2vh', textDecoration: 'none' }}>
            Already Signed Up? <Link to="/login" style={{ textAlign: 'center', textDecoration: 'none' }}><b>Login</b></Link>
          </h6>

        </div>
      </div>
    </div>

    </section>
  )
}

export default Signup