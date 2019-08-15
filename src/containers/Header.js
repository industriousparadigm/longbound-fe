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
      <Menu id='menu' secondary float='right' size='massive'>
        <Menu.Menu position='right'>
          <Menu.Item
            name='About'
            as={Link}
            to="/about"
          />
          <Menu.Item
            name='Projects'
            as={Link}
            to='/projects'
          />
          <Menu.Item
            name='Contact'
            as={Link}
            to='/contact'
          />
        </Menu.Menu>
      </Menu>
    </div>
  )
}

export default Header
