import React from "react";
import './AboutMe.css'
import avatar from '../../../images/Avatar.jpg';

function AboutMe() {
  return <section className='aboutme'>
    <h3 className='aboutme__title'>Студент</h3>
    <div className='aboutme__line'></div>
    <div className='aboutme__card'>
      <div className='aboutme__container'>
        <h2 className='aboutme__name'>Алексей</h2>
        <p className='aboutme__subtitle'>Фронтенд-разработчик, 31 год</p>
        <p className='aboutme__info'>Я из Севастополя, закончил Сгу на факультете "Наземный транспорт". Живу с женой. 
                        Люблю велосипедный спорт и баскетбол. 7 лет занимался своим магазином, после пришлось
                         переквалифицироваться в системного администратора. Сейчас учусь и работаю. Мечтаю стать хорошим разработчиком.</p>
        <a href={'https://github.com/AlekseevFr'}
          target="_blank"
          rel="noreferrer"
          className="aboutme__git">Github</a>
      </div>
      <img className="aboutme__photo"
        src={avatar}
        alt="Фото парня"></img>
    </div>
  </section>
}
export default AboutMe;
