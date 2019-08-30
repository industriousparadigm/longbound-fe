import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { BreakpointProvider, Breakpoint } from 'react-socks';

import Header from './containers/Header'
import Footer from './containers/Footer'
import Landing from './containers/Landing'
import About from './containers/About'
import Contact from './containers/Contact'
import Work from './containers/Work'
import SideText from './containers/SideText'
import NotFound from './containers/NotFound'

import './App.css'

const quotesURL = 'https://longbound-cc2a.restdb.io/rest/quotes'
const apiKey = process.env.REACT_APP_RESTDB_KEY


const App = () => {
  const [activeSection, setActiveSection] = useState('')
  const [quotes, setQuotes] = useState(null)

  useEffect(() => {
    !quotes && getQuotes().then(setQuotes)
  }, [quotes])

  const handleMenuClick = ({ target }) => {
    setActiveSection(target.text)
  }

  const getQuotes = () => fetch(quotesURL, {
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': apiKey
    }
  }).then(res => res.json())

  const sideText = () => {
    switch (activeSection) {
      case "About":
        return "Who we are"
      case "Work":
        return "What we do"
      case "Contact":
        return "Get in touch"
      default:
        return ""
    }
  }

  return (
    <Router>
      <BreakpointProvider>
        <Header handleMenuClick={handleMenuClick} activeSection={activeSection} />
        <Breakpoint medium up>
          <SideText text={sideText()} />
        </Breakpoint>
        <Switch>
          <Route exact path='/' render={(props) => <Landing {...props} quotes={quotes} />} />
          <Route exact path='/about' render={(props) => <About {...props} setActiveSection={setActiveSection} />} />
          <Route exact path='/work' render={(props) => <Work {...props} setActiveSection={setActiveSection} />} />
          <Route exact path='/contact' render={(props) => <Contact {...props} setActiveSection={setActiveSection} />} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BreakpointProvider>
    </Router>
  )
}

export default App
