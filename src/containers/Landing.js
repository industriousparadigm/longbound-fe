import React from 'react'
import Quotes from '../components/Quotes'


const Landing = ({ quotes }) => {
  return (
    <div className="main">
      <h1 className='section-header'>
        A creative R&D and Front-end Innovation team imagining and inventing a better future.
      </h1>
      <Quotes quotes={quotes} />
    </div>
  )
}

export default Landing
