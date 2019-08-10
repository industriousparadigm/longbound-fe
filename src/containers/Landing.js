import React from 'react'
import { Header } from 'semantic-ui-react'
import Quotes from '../components/Quotes'


const Landing = () => {
  return (
    <div className="main">
      <Header as='h1' className='section-header'>
        A creative R&D and Front-end Innovation team imagining and inventing a better future.
      </Header>
      <Quotes />
    </div>
  )
}

export default Landing
