import React from 'react'
import { Form, Button } from 'semantic-ui-react'


const Contact = () => {
  return (
    <div className="main">
      {/* <Form
        id="contact-form"
        size='big'
        name="contact"
        method='POST'
        data-netlify="true"
      > */}

      {/* <Form.Group widths='equal' name="deets" >
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
        <button
          type="submit"
          className="fluid ui big black button"
        >
          Submit
        </button> */}
      <form
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

        <div class="row">
          <div class="input-field col s6">
            <input type='text' name="name" />
            <label for="name">Name</label>
          </div>
          <div class="input-field col s6">
            <input required type='email' name="email" />
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea className="materialize-textarea"
              rows={10}
              name="message"
              required
            >
            </textarea>
            <label for="message">Your message</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">

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
