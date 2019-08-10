import React, { useState, useEffect } from 'react'
import { Image } from 'semantic-ui-react'
import refresh from '../img/refresh.png'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const Quotes = () => {
  const quotesURL = 'https://longbound-cc2a.restdb.io/rest/quotes'
  const apiKey = process.env.REACT_APP_RESTDB_KEY

  const [quotes, setQuotes] = useState(null)
  const [quote, setQuote] = useState({})

  useEffect(() => {
    fetch(quotesURL, {
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': apiKey
      }
    })
      .then(res => res.json())
      .then(quotes => {
        setQuotes(quotes)
        randomizeQuote(quotes)
      })
  }, [apiKey])

  const randomizeQuote = quotes => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }

  return !quotes
    ? <Loader
      className="loading-spinner"
      type="TailSpin"
      color="#444"
      height="130"
      width="130"
    />
    : (
      <section>
        <div id="quote-box">
          <p>"{quote.quote}"</p>
          <p><em>{quote.author}</em></p>
        </div>
        <Image
          className='button-refresh'
          src={refresh} size='mini'
          centered
          onClick={() => randomizeQuote(quotes)}
        />
      </section>
    )
}

export default Quotes
