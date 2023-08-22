import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Dashboard from './pages/Dashboard' 
import Login from "./pages/Login"
import Signup from './pages/Signup';      

function App() {
  return (
    <Router>
      <main>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
