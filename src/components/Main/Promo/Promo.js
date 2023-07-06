import React from 'react';
import './Promo.css';

function Promo () {
   return <section className='promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки</h1>
      <div className='promo__navtab'>
        <button className='promo__button'>
          <a className='promo__navtext' href='#aboutproject'>О проекте</a>
        </button>
        <button className='promo__button'>
          <a className='promo__navtext' href='#techs'>Технологии</a>
        </button>
        <button className='promo__button'>
          <a className='promo__navtext' href='#aboutme'>Студент</a>
        </button>
      </div>
    </section>
}
export default Promo;