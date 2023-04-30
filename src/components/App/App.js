import './App.css';
import {ReactComponent as Logo} from '../../images/header-logo.svg';

function App() {
  return <main className='content'>
    <header className='header'>
      <Logo/>
      <div className='header__auth'>
        <a href='*' className='header__reg'>Регистрация</a>
        <botton className='header__signin'>
          <p href='*' className='header__signup'>Войти</p>
        </botton>
      </div>
    </header>
    <section className='hromo'>
      <h1 className='hromo__title'>Учебный проект студента факультета Веб-разработки</h1>
      <div className='hromo__navtab'>
        <botton className='hromo__botton'>
          <p className='hromo__navtext'>О проекте</p>
        </botton>
        <botton className='hromo__botton'>
          <p className='hromo__navtext'>Технологии</p>
        </botton>
        <botton className='hromo__botton'>
          <p className='hromo__navtext'>Студент</p>
        </botton>
      </div>
    </section>
    <section className='aboutproject'>
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
    <section className='techs'>
      <h3 className='techs__title'>Технологии</h3>
      <div className='techs__line'></div>
      <h1 className='techs__header'>7 технологий</h1>
      <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='techs__blocks'>
        <li className='techs__block'>HTML</li>
        <li className='techs__block'>CSS</li>
        <li className='techs__block'>JS</li>
        <li className='techs__block'>React</li>
        <li className='techs__block'>Git</li>
        <li className='techs__block'>Express.js</li>
        <li className='techs__block'>MongoDB</li>
      </ul>
    </section>
    <section className='aboutme'>
      <h3 className='aboutme__title'>Студент</h3>
      <div className='aboutme__line'></div>
      <div className='aboutme__card'>
        <h2 className='aboutme__name'>Алексей</h2>
        <p className='aboutme__subtitle'>Фронтенд-разработчик, 31 год</p>
        <p className='aboutme__info'>Я из Севастополя, закончил Сгу на факультете "Наземный транспорт". Живу с женой. 
        Люблю велосипедный спорт и баскетбол. 7 лет занимался своим магазином, после пришлось
         переквалифицироваться в системного администратора. Сейчас учусь и работаю. Мечтаю стать хорошим разработчиком.</p>
        <a href={'https://github.com/AlekseevFr'} target="_blank" rel="noreferrer" className="aboutme__git">Github</a>
        <img className="aboutme__photo" src='../../images/Avatar.jpg' alt="Фото парня"></img>
      </div>
    </section>
    <section className='portfolio'></section>
    <footer className='footer'></footer>
  </main>
}

export default App;
