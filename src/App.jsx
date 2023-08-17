import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Home from './Home'
import Header from './Header'
import Dashboard from './Dashboard'       

function App() {
  return (
    <Router>
      <main>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
