import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Icon from '../../images/Icon.svg'
import Menu from '../../images/Menu.svg'
import { NavLink } from 'react-router-dom';

const tabs = [{ title: 'Фильмы', to: '/movies' }, { title: 'Сохраненные Фильмы', to: '/saved-movies' }];

function Header({ isLoggedIn, handleMenuClick }) {
  return (
    <header className='header'>
     <Logo />
      {isLoggedIn ? (
        <>
          <div className='header__films'>
            {tabs.map((tab) => (
              <NavLink key={tab.to} to={tab.to} className={isActive => "header__film" + (isActive ? "-active" : "")}>
                {tab.title}
             </NavLink>
            ))}
          </div>
          <div className='header__in'> 
            {/* <a className='header__acc' href='/profile'>Аккаунт</a> */}
            <NavLink to="/profile" className={isActive => "header__acc" + (isActive ? "-active" : "")}>Аккаунт</NavLink>
            <img className='header__icon' src={Icon}  alt="человечек"/>
          </div>
          <button className='header__menu-button' onClick={handleMenuClick}>
              <img className='header__menu-img' src={Menu}  alt="Три линии в столбик"/>
          </button>
        </>
      ) : (
        <div className='header__auth'>
        <a href='/signup' className='header__reg'>Регистрация</a>
        <button className='header__signin'>
          <a href='/signin' className='header__enter'>Войти</a>
        </button>
      </div>
      )}
    </header>
  );
}
 export default Header;