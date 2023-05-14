import React from "react";
import './Techs.css';

function Techs() {
  return <section className='techs' id="techs">
    <h3 className='techs__title'>Технологии</h3>
    <div className='techs__line'></div>
    <h1 className='techs__header'>7 технологий</h1>
    <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
    <ul className='techs__blocks'>
      <li className='techs__block'>
        <a className='techs__link' href="https://ru.wikipedia.org/wiki/HTML" target="_blank" rel="noreferrer">HTML</a>
      </li>
      <li className='techs__block'>
        <a className='techs__link' href="https://ru.wikipedia.org/wiki/CSS" target="_blank" rel="noreferrer">CSS</a>
      </li>
      <li className='techs__block'>
        <a className='techs__link' href="https://ru.wikipedia.org/wiki/JavaScript" target="_blank" rel="noreferrer">JS</a>
      </li>
      <li className='techs__block'>
        <a className='techs__link' href="https://ru.wikipedia.org/wiki/React" target="_blank" rel="noreferrer">React</a>
      </li>
      <li className='techs__block'>
        <a className='techs__link' href="https://github.com/AlekseevFr" target="_blank" rel="noreferrer">Git</a>
      </li>
      <li className='techs__block'>
        <a className='techs__link' href="https://expressjs.com/ru/" target="_blank" rel="noreferrer">Express.js</a>
      </li>
      <li className='techs__block'>
        <a className='techs__link' href="https://www.mongodb.com/" target="_blank" rel="noreferrer">MongoDB</a>
      </li>
    </ul>
  </section>
}

export default Techs;
