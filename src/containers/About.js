import React, { useEffect } from 'react'
import { Header } from 'semantic-ui-react'

const About = ({ setActiveSection }) => {

  useEffect(() => {
    setActiveSection("About")
  }, [setActiveSection])

  return (
    <div className="main">
      <Header as='h2' className='section-header'>
        Creative solutions are not stumbled upon by accident, nor realized by lone geniuses. They come from synergistic teams that apply the right methods and attitudes.
      </Header>

      <section className="body-text">
        <p>
          We use our expertise in creativity, design and new product development to help imagining and inventing a better future for everyone.
        </p>
        <p>
          Our complementary skillsets and background in design and engineering with our systematic approach, creativity and facilitating capabilities, enable a unique perspective to projects with a broad vision and solutions.
        </p>
        <p>
          We want to empower companies with new ideas and opportunities to improve their innovation output. We can help in looking at new frames and/or propose solutions after a careful and systematic process.
        </p>
        <p>
          We work as a team and as brothers, and collaborate with people that can bring even more expertise to the table.
        </p>
      </section>
    </div>
  )
}

export default About
