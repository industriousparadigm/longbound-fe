import React, { useEffect } from 'react';
import { Header, Image } from 'semantic-ui-react';
import schema from '../img/key activities LB.png';

const Services = ({ setActiveSection }) => {
  useEffect(() => {
    setActiveSection('Services');
  }, [setActiveSection]);

  return (
    <div className="main">
      <Header as="h2" className="section-header">
        The Innovation Brothers helps people and organizations to become more
        innovative by identifying, creating and realizing growth opportunities
        through innovation.
      </Header>

      <Image
        src={schema}
        id="schema-picture"
        className="body-image"
        alt="The Innovation Brothers methodology"
      />

      <section className="services-list">
        <ol>
          <li>
            Improve systems, products and/or services
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

      <br />

      <section className="body-text">
        <p>
          We follow a model structure that is adapted based on the specificities
          of the project with different tools and methodologies.
        </p>
      </section>
    </div>
  );
};

export default Services;
