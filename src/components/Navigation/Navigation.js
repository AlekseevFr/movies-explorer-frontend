import React from "react";
import './Navigation.css';
import {NavLink} from "react-router-dom";
import Icon from '../../images/Icon.svg'


function Navigation() {
  return (
    <section className="navigation">
      <button className="navigation__close">&#10006;</button>
      <div className="navigation__box">
        <NavLink to="/" className="navigation__link">Главная</NavLink>
        <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
        <NavLink to="/saved-movies" className="navigation__link">Сохранённые Фильмы</NavLink>
      </div>
      <div className='navigation__in'>
        <NavLink className='navigation__acc' to='*'>Аккаунт</NavLink>
        <img className='navigation__icon'
          src={Icon}
          alt="человечек"/>
      </div>
    </section>
  );
}

export default Navigation;
