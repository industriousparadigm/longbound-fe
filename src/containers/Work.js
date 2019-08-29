import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import compiling from '../img/compiling.png'


const Projects = () => {
  return (
    <div className="main">
      <Image src={compiling} size='small' centered />
      <Header as='h2' className='section-header'>
        We're compiling our work
        <br />
        (Coming soon)
      </Header>
    </div>
  )
}

export default Projects
