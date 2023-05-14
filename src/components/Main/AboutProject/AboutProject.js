import React from "react";
import './AboutProject.css';

function AboutProject () {
 return <section className='aboutproject' id="aboutproject">
      <h3 className='aboutproject__title'>О проекте</h3>
      <div className='aboutproject__line'></div>
      <div className='aboutproject__info'>
        <h3 className='aboutproject__info-title aboutproject_info-title_stage'>Дипломный проект включал 5 этапов</h3>
        <h3 className='aboutproject__info-title aboutproject_info-title_term'>На выполнение диплома ушло 5 недель</h3>
        <p className='aboutproject__info-text aboutproject_info-text_stage'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className='aboutproject__info-text aboutproject_info-text_term'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className='aboutproject__scale'>
        <div className='aboutproject__scale-back'>
          <div className='aboutproject__scale-one'>
            <p className='aboutproject__scale-paragraph'>1 неделя</p>
          </div>
          <h4 className='aboutproject__scale-subtitle'>Back-end</h4>
        </div>
        <div className='aboutproject__scale-front'>
          <div className='aboutproject__scale-four'>
            <p className='aboutproject__scale-paragraph'>4 недели</p>
          </div>
          <h4 className='aboutproject__scale-subtitle'>Front-end</h4>
        </div>
      </div>
    </section>
}
export default AboutProject;