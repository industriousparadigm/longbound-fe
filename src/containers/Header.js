import React from 'react'
import logo from '../img/longbound-logo.png'
import { Link } from 'react-router-dom'


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
      <div id='menu'>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
