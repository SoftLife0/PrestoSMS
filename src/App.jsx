import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard' 
import Login from "./pages/Login"
import Signup from './pages/Signup';      
import SendSms from './pages/SendSms';
import SendEmail from './pages/SendEmail';
import NewLogin from './pages/NewLogin';
import NewSignup from './pages/NewSignup';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/newlogin" exact component={NewLogin} />
          <Route path="/newsignup" exact component={NewSignup} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/sendsms" component={SendSms} />
          <Route path="/sendemail" component={SendEmail} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
