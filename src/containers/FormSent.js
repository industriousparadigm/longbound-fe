import React from 'react'
import { Icon } from 'semantic-ui-react'
import alerts from '../img/alerts.png'


const FormSent = () => {
  return (
    <div className="main">
      <Icon name="mail square" centered />
      <h2 className='section-header'>
        404 Error
        <br />
        URL not found in this server.
      </h2>
    </div>
  )
}

export default FormSent
