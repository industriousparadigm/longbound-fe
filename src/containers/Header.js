import React, { useState } from 'react'
import logo from '../img/longbound-logo.png'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { Breakpoint } from 'react-socks'

const Header = props => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)

  return (
    <div id="header">
      <Breakpoint small down>
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
      </Breakpoint>
      <Breakpoint medium up>
        <div id="desktop-menu">
          <div id="logo-box">
            <Link to='/'>
              <img
                id="longbound-logo-desktop"
                alt="longbound logo"
                src={logo}
              />
            </Link>
          </div>
          <div id="menu-options">
            <Link className="menu-option" to="/about">About</Link>
            <Link className="menu-option" to="/projects">Projects</Link>
            <Link className="menu-option" to="/contact">Contact</Link>
          </div>
        </div>
      </Breakpoint>
    </div>

  )
}

export default Header
