import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import compiling from '../img/compiling.png'


const Work = () => {
  return (
    <div className="main">
      <Header as='h2' className='section-header' style={{ "marginTop": "6vh" }}>
        Longbound helps people and organizations to become more innovative by identifying, creating and realizing growth opportunities through innovation.
      </Header>

      <section className="work-list">
        <ol>
          <li>Improve systems, products and/or services
            <ol type="a">
              <li>Solve “unsolvable problems”</li>
              <li>Expose and resolve bottlenecks and failures</li>
              <li>Reduce costs</li>
            </ol>
          </li>
          <li>Develop new innovative concepts and new market segments</li>
          <li>Forecast the evolution of products, services and technologies</li>
        </ol>
      </section>

    </div>
  )
}

export default Work
