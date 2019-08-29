import React, { useState } from 'react'
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


const App = () => {
  const [activeSection, setActiveSection] = useState('')
  const [aboutText,] = useState('What we do')

  const handleMenuClick = ({ target }) => {
    setActiveSection(target.text)
  }

  const sideText = () => {
    switch (activeSection) {
      case "About":
        return aboutText
      case "Work":
        return "Our work"
      case "Contact":
        return "Get in touch"
      default:
        return ""
    }
  }

  const aboutScrollHandler = (event) => {
    console.log(event.clientX)
  }

  return (
    <Router>
      <BreakpointProvider>
        <Header handleMenuClick={handleMenuClick} activeSection={activeSection} />
        <Breakpoint medium up>
          <SideText text={sideText()} />
        </Breakpoint>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route
            exact
            path='/about'
            render={(props) => <About {...props} onScroll={aboutScrollHandler} />}
          />
          <Route exact path='/work' component={Work} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BreakpointProvider>
    </Router>
  )
}

export default App
