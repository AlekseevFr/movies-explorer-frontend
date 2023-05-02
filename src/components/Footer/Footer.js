import React from 'react';
import './Footer.css';

function Footer () {
  return <footer className='footer'>
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__line'></div>
      <div className='footer__downbar'>
        <p className='footer__year'>© 2023</p>
        <div className='footer__links'>
        <a className='footer__praktikum-link' href='*'>Яндекс.Практикум</a>
        <a className='footer__github-link' href='*'>Github</a>
        </div>
      </div>
    </footer>
}
export default Footer;