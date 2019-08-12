import React from 'react'
import { Form } from 'semantic-ui-react'


const Contact = () => {
  return (
    <div className="main">
      <Form
        id="contact-form"
        size='massive'
        name="lb-contact"
        method="POST"
        data-netlify="true"
      >
        <Form.Group widths='equal'>
          <Form.Input fluid placeholder='your name' />
          <Form.Input fluid placeholder='your email address' required />
        </Form.Group>
        <Form.TextArea placeholder='please type your message here...' rows={10} required />
        <Form.Button fluid color='black' size='massive'>Submit</Form.Button>
      </Form>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

    </div>
  )
}

export default Contact
