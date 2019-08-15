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
      {/* hidden input for Netlify */}
      <input type="hidden" name="form-name" value="contact" />

      <input type="text" name="name" placeholder="name" />
      <br />
      <input type="email" name="email" placeholder="email" />
      <br />
      <textarea name="message" placeholder="your message here" rows={10} ></textarea>
      <br />
      <button type="submit">Send</button>

    </form>

  )
}

export default Contact
