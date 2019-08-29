import React, { useState } from 'react'
import logo from '../img/longbound-logo.png'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { Breakpoint } from 'react-socks'

const Header = props => {
  const [showMenu, setShowMenu] = useState(false)
  const [activeSection, setActiveSection] = useState(null)

  const handleMenuClick = ({ target }) => {
    setActiveSection(target.text)
  }

  const toggleMenu = () => setShowMenu(!showMenu)

  const Menu = ({ isMobile }) =>
    <div id={isMobile ? 'menu' : 'menu-options'}>
      <Link
        className={activeSection === "About" ? "selected menu-option" : "menu-option"}
        to="/about"
        onClick={handleMenuClick}
      >About</Link>
      <Link
        className={activeSection === "Projects" ? "selected menu-option" : "menu-option"}
        to="/projects"
        onClick={handleMenuClick}
      >Work</Link>
      <Link
        className={activeSection === "Contact" ? "selected menu-option" : "menu-option"}
        to="/contact"
        onClick={handleMenuClick}>Contact</Link>
    </div>

  return (
    <div id="header">
      <Breakpoint small down>
        <Link to='/' onClick={handleMenuClick}>
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
          showMenu && <Menu isMobile={true} />
        }
      </Breakpoint>
      <Breakpoint medium up>
        <div id="desktop-menu">
          <div id="logo-box">
            <Link to='/' onClick={handleMenuClick}>
              <img
                id="longbound-logo-desktop"
                alt="longbound logo"
                src={logo}
              />
            </Link>
          </div>
          <Menu isMobile={false} />
        </div>
      </Breakpoint>
    </div>

  )
}

export default Header
