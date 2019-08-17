import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import schema from '../img/key activities crop.png'
import faces from '../img/faces.png'
// import SideText from './SideText'


const About = () => {
  return (
    <div className="main">
      {/* <SideText text="Who we are" /> */}
      <Header as='h2' className='section-header'>
        Creative solutions are not stumbled upon by accident, nor realized by lone geniuses. They come from synergistic teams that apply the right methods and attitudes.
      </Header>

      <Image src={schema} id="schema-picture" className="body-image" alt="Longbound methodology" />
      <Image src={faces} id="faces-picture" className="body-image" alt="Longbound Bros" />
      <div id="name-tags">
        <div className="name-tag">
          <Header as='h3'>
            Bernardo
            <br />
            <span> <em>designer</em> </span>
          </Header>
        </div>
        <div className="name-tag">
          <Header as='h3'>
            Diogo
            <br />
            <span> <em>engineer</em> </span>
          </Header>
        </div>
      </div>


      <section className="body-text">
        <p>
          We use our expertise in creativity, design and new product development to help imagining and inventing a better future for everyone.
        </p>
        <p>
          Our complementary skillsets and background in design and engineering with our systematic approach, creativity and facilitating capabilities, enable a unique perspective to projects with a broad vision and solutions.
        </p>
        <p>
          We follow a model structure that is adapted based on the specificities of the project with different tools and methodologies.
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
