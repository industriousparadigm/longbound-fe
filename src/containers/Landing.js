import React, { Fragment } from 'react'
import { Icon, Button } from 'semantic-ui-react'


const Landing = () => {
  return (
    <Fragment>
      <h1>A creative R&D and Front-end Innovation team imagining and inventing a better future.</h1>
      <section>
        <p>"Innovation is about changing reality. Creativity is about changing perception."</p>
        <p>Luc de Brabandere</p>
        <Button color='black' icon>
          <Icon name='refresh' />
        </Button>

      </section>
    </Fragment>
  )
}

export default Landing
