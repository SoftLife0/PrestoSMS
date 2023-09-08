import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard' 
import Login from './pages/Login'
import Signup from './pages/Signup'      
import SendSms from './pages/SendSms'
import SendEmail from './pages/SendEmail'
import Csv from './pages/Csv';
import Loader from './components/Loader';


function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/sendsms" component={SendSms} />
          <Route path="/sendemail" component={SendEmail} />
          <Route path="/csv" component={Csv} />
          <Route path="/loader" component={Loader}/>
        </Switch>
      </main>
    </Router>
  )
}

export default App
