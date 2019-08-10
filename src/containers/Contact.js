import React from 'react'
import { Form } from 'semantic-ui-react'


const Contact = () => {
  return (
    <div className="main">
      <Form id="contact-form" size='massive'>
        <Form.Group widths='equal'>
          <Form.Input fluid placeholder='your name' />
          <Form.Input fluid placeholder='your email address' required />
        </Form.Group>
        <Form.TextArea placeholder='please type your message here...' rows={10} required />
        <Form.Button fluid color='black' size='massive'>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default Contact
