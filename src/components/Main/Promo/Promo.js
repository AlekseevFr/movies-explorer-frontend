import React from 'react';
import './Promo.css';

function Promo () {
   return <section className='promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки</h1>
      <div className='promo__navtab'>
        <botton className='promo__botton'>
          <p className='promo__navtext'>О проекте</p>
        </botton>
        <botton className='promo__botton'>
          <p className='promo__navtext'>Технологии</p>
        </botton>
        <botton className='promo__botton'>
          <p className='promo__navtext'>Студент</p>
        </botton>
      </div>
    </section>
}
export default Promo;