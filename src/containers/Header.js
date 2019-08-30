import React, { useState } from 'react'
import logo from '../img/longbound-logo.png'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { Breakpoint, setDefaultBreakpoints } from 'react-socks'

setDefaultBreakpoints([
  { xsmall: 0 },
  { small: 376 },
  { medium: 650 }
]);


const Header = ({ handleMenuClick, activeSection }) => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)

  const getMenuOptionClass = sectionName => {
    return activeSection === sectionName ? "selected menu-option" : "menu-option"
  }

  const Menu = ({ isMobile }) =>
    <div id={isMobile ? 'menu' : 'menu-options'}>
      <Link
        className={getMenuOptionClass("About")}
        to="/about"
        onClick={handleMenuClick}
      >About</Link>
      <Link
        className={getMenuOptionClass("Work")}
        to="/work"
        onClick={handleMenuClick}
      >Work</Link>
      <Link
        className={getMenuOptionClass("Contact")}
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
