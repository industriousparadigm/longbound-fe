import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import refresh from '../img/refresh.png'


const Landing = () => {
  return (
    <div className="main">
      <Header as='h1' className='section-header'>
        A creative R&D and Front-end Innovation team imagining and inventing a better future.
      </Header>

      <section id="quote-box">
        <p>"Innovation is about changing reality. Creativity is about changing perception."</p>
        <p>Luc de Brabandere</p>
        <Image src={refresh} size='mini' centered />


      </section>
    </div>
  )
}

export default Landing
