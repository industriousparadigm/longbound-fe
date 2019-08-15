import React from 'react'
import logo from '../img/longbound-logo.png'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'



const Header = props => {
  return (
    <div id="header">
      <Link to='/'>
        <img
          id="longbound-logo"
          alt="longbound logo"
          src={logo}
        />
      </Link>
      <div id="menu-toggle">
        <Icon name='circle' />
        <Icon name='circle' />
        <Icon name='circle' />
      </div>
      <div id='menu'>
        <Link className="menu-option" to="/about">About</Link>
        <Link className="menu-option" to="/projects">Projects</Link>
        <Link className="menu-option" to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Header
