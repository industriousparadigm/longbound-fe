import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from './containers/Header'
import Footer from './containers/Footer'
import Landing from './containers/Landing'
import About from './containers/About'
import Contact from './containers/Contact'
import Projects from './containers/Projects'
import NotFound from './containers/NotFound'

import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
