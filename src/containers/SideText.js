import React from 'react'

const SideText = ({ text, aboutVariant }) =>
  <div className='side-text-container'>
    <h1 className='side-text'>{aboutVariant || text}</h1>
  </div>

export default SideText