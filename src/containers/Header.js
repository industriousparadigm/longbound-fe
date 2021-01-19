import React, { useState } from 'react';
import logo from '../img/theinnovationbrothers-logo.png';
import { Link } from 'react-router-dom';
import { Breakpoint, setDefaultBreakpoints } from 'react-socks';

setDefaultBreakpoints([{ xsmall: 0 }, { small: 376 }, { medium: 650 }]);

const Header = ({ handleMenuClick, activeSection }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const getMenuOptionClass = (sectionName) => {
    return activeSection === sectionName
      ? 'selected menu-option'
      : 'menu-option';
  };

  const Menu = ({ isMobile }) => (
    <div id={isMobile ? 'menu' : 'menu-options'}>
      <Link
        className={getMenuOptionClass('About')}
        to="/about"
        onClick={handleMenuClick}
      >
        About
      </Link>
      <Link
        className={getMenuOptionClass('Services')}
        to="/services"
        onClick={handleMenuClick}
      >
        Services
      </Link>
      <Link
        className={getMenuOptionClass('Contact')}
        to="/contact"
        onClick={handleMenuClick}
      >
        Contact
      </Link>
    </div>
  );

  return (
    <>
      <div id="header-bg"></div>

      <div id="header">
        <Breakpoint small down>
          <Link to="/" onClick={handleMenuClick}>
            <img id="logo" alt="the innovation brothers logo" src={logo} />
          </Link>
          <br />
          <div id="menu-toggle" onClick={toggleMenu}>
            <div className={`${showMenu ? 'change' : ''} bar1`}></div>
            <div className={`${showMenu ? 'change' : ''} bar2`}></div>
            <div className={`${showMenu ? 'change' : ''} bar3`}></div>
          </div>

          {showMenu && <Menu isMobile={true} />}
        </Breakpoint>
        <Breakpoint medium up>
          <div id="desktop-menu">
            <div id="logo-box">
              <Link to="/" onClick={handleMenuClick}>
                <img
                  id="logo-desktop"
                  alt="the innovation brothers logo"
                  src={logo}
                />
              </Link>
            </div>
            <Menu isMobile={false} />
          </div>
        </Breakpoint>
      </div>
    </>
  );
};

export default Header;
