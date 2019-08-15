import React from 'react'
import { Image, Menu } from 'semantic-ui-react'
import logo from '../img/longbound-logo.png'
import { Link } from 'react-router-dom'


const Header = props => {
  return (
    <div id="header">
      <img
        id="longbound-logo"
        alt="longbound logo"
        src={logo}
        as={Link}
        to='/'
      />
      <div id='menu' secondary float='right' size='massive'>
        <ul position='right'>
          <li as={Link} to="/about">About</li>
          <li as={Link} to='/projects'>Projects</li>
          <li as={Link} to='/contact'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
