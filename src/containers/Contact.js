import React, { useEffect } from 'react'

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
        action="/message-sent"
      >
        <p>
          You can get in touch using <strong>team[at]longbound[dot]com</strong> or via the form below.
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
