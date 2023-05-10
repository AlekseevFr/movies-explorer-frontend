import React from "react"
import './Portfolio.css'

function Portfolio () {
  return <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <a className='portfolio__link' href='https://github.com/AlekseevFr/russian-travel'>
        <p className='portfolio__type'>Статичный сайт</p>
        <span className="portfolio__arrow">↗</span>
      </a>
      <div className='portfolio__line'></div>

      <a className='portfolio__link' href='https://github.com/AlekseevFr/mesto'>
        <p className='portfolio__type'>Адаптивный сайт</p>
        <span className="portfolio__arrow">↗</span>
      </a>
      <div className='portfolio__line'></div>

      <a className='portfolio__link' href='https://github.com/AlekseevFr/react-mesto-api-full-gha'>
        <p className='portfolio__type'>Одностраничное приложение</p>
        <span className="portfolio__arrow">↗</span>
      </a>
    </section>
}
export default Portfolio;