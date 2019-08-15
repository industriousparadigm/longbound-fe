import React, { useState } from 'react'
import logo from '../img/longbound-logo.png'
import { Link } from 'react-router-dom'
import { Icon, List } from 'semantic-ui-react'

const Header = props => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)

  return (
    <div id="header">
      <Link to='/'>
        <img
          id="longbound-logo"
          alt="longbound logo"
          src={logo}
        />
      </Link>
      <div id="menu-toggle" onClick={toggleMenu}>
        <Icon name='circle' size='large' />
        <Icon name='circle' size='large' />
        <Icon name='circle' size='large' />
      </div>
      {
        showMenu && <div id='menu'>
          <Link className="menu-option" to="/about">About</Link>
          <Link className="menu-option" to="/projects">Projects</Link>
          <Link className="menu-option" to="/contact">Contact</Link>
        </div>
      }
      {/* <List id='menu' >
        <List.Item as={Link} to='/about'>About</List.Item>
        <List.Item as={Link} to='/projects'>Projects</List.Item>
        <List.Item as={Link} to='/contact'>Contact</List.Item>
      </List> */}
    </div>
  )
}

export default Header
