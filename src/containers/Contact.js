import React from 'react'
import { Form, Button } from 'semantic-ui-react'


const Contact = () => {
  return (
    <div className="main">
      <Form
        id="contact-form"
        size='big'
        name="contact"
        method='POST'
        data-netlify="true"
      >
        <p>
          You can get in touch using <strong>team[at]longbound[dot]com</strong> or via the form below.
      </p>
        <br />
        <Form.Group widths='equal' name="deets" >
          {/* hidden input for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          <Form.Input
            fluid
            placeholder='your name'
            type='text'
            name="name"
          />
          <Form.Input
            fluid
            placeholder='your email address'
            required
            type='email'
            name="email"
          />
        </Form.Group>
        <Form.TextArea
          placeholder='your message'
          rows={10}
          name="message"
          required
        />
        <Button
          fluid
          type="submit"
          color='black'
          size='big'
        >
          Submit
        </Button>
        <br />
      </Form>
    </div>
  )
}


export default Contact
