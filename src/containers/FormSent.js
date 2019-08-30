import React, { useEffect } from 'react'
import { Header, Image } from 'semantic-ui-react'
import backIcon from '../img/back-icon.png'

const FormSent = ({ setActiveSection }) => {
  useEffect(() => {
    setActiveSection("Form sent")
  }, [setActiveSection])

  return (
    <div className="main">
      <Header as='h2' className='section-header'>
        Thank you for contacting us
      </Header>
      <section className="body-text">
        <p>
          We will be in touch shortly.
        </p>
      </section>
      <Image src={backIcon} size='small' centered />
    </div>
  )
}

export default FormSent
