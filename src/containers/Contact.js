import React, { useEffect } from 'react'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const LINKEDIN_URL = "https://www.linkedin.com/company/longbound/"

const Contact = ({ setActiveSection }) => {

  useEffect(() => {
    setActiveSection("Contact")
  }, [setActiveSection])

  return (
    <div className="main">
      <form
        id="contact-form"
        name="contact"
        method='post'
      >
        <p>
          You can connect with us on <a href={LINKEDIN_URL} target="none" >
            <Icon
              link
              name='linkedin'
              size='large'
            /></a>, email us at <strong>team[at]longbound[dot]com</strong> or write to us using the form below.
        </p>
        <br />

        {/* Hidden input for netlify */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="row">
          <div className="input-field col s6">
            <input type='text' name="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field col s6">
            <input required type='email' name="email" />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea className="materialize-textarea"
              rows={10}
              name="message"
              required
            >
            </textarea>
            <label htmlFor="message">Your message</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">

            <button
              type="submit"
              className="fluid ui big black button"
            >
              Submit
            </button>
          </div>
        </div>

      </form>

    </div >
  )
}


export default Contact
