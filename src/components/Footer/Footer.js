import React from 'react';
import './Footer.css';

function Footer () {
  return <footer className='footer'>
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__line'></div>
      <div className='footer__downbar'>
        <p className='footer__year'>© 2023</p>
        <div className='footer__links'>
        <a className='footer__praktikum-link' href='https://practicum.yandex.ru/' target="_blank" rel="noreferrer">Яндекс.Практикум</a>
        <a className='footer__github-link' href='https://github.com/AlekseevFr' target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </footer>
}
export default Footer;