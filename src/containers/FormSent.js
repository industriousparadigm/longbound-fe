import React, { useEffect } from 'react'
import { Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
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
      <section className="work-list">
        <p>
          We will be in touch shortly.
        </p>
      </section>
      <br />
      <Image src={backIcon} size='tiny' centered as={Link} to='/contact' />
    </div>
  )
}

export default FormSent
