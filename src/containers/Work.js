import React from 'react'
import { Header } from 'semantic-ui-react'


const Work = () => {
  return (
    <div className="main">
      <Header as='h2' className='section-header'>
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
