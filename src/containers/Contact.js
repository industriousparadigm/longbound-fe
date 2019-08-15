import React from 'react'
import { Form } from 'semantic-ui-react'


const Contact = () => {
  return (
    // <div className="main">
    //   <Form
    //     id="contact-form"
    //     size='big'
    //     name="lb-contact"
    //     method='POST'
    //     data-netlify={true}
    //   >
    //     <Form.Group widths='equal' name="deets" >
    //       <Form.Input fluid placeholder='your name' type='text' name="name" />
    //       <Form.Input fluid placeholder='your email address' required type='email' name="email" />
    //     </Form.Group>
    //     <Form.TextArea placeholder='your message' rows={10} name="message" required />
    //     <Form.Button fluid color='black' size='big'>Submit</Form.Button>
    //   </Form>
    // </div>
    <form className="main" name="contact" method="POST" data-netlify="true">
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

  )
}

export default Contact
