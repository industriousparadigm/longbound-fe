import React, { useEffect } from 'react'
import { Header, Image } from 'semantic-ui-react'
import alerts from '../img/alerts.png'

// 404
const NotFound = ({ setActiveSection }) => {
  useEffect(() => {
    setActiveSection("404")
  }, [setActiveSection])

  return (
    <div className="main">
      <Image src={alerts} size='small' centered />
      <Header as='h2' className='section-header'>
        404 Error
        <br />
        URL not found in this server.
      </Header>
    </div>
  )
}

export default NotFound
