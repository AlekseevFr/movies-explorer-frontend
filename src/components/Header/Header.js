import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Icon from '../../images/Icon.svg'
import Menu from '../../images/Menu.svg'

function Header({ isLoggedIn, handleMenuClick }) {
  return (
    <header className='header'>
     <Logo />
      {isLoggedIn ? (
        <>
          <div className='header__films'>
            <a className='header__film' href='/movies'>Фильмы</a>
            <a className='header__saved-films' href='/saved-movies'>Сохраненные Фильмы</a>
          </div>
          <div className='header__in'> 
            <a className='header__acc' href='/profile'>Аккаунт</a>
            <img className='header__icon' src={Icon}  alt="человечек"/>
          </div>
          <button className='header__menu-button' onClick={handleMenuClick}>
              <img className='header__menu-img' src={Menu}  alt="Три линии в столбик"/>
          </button>
        </>
      ) : (
        <div className='header__auth'>
        <a href='/signup' className='header__reg'>Регистрация</a>
        <botton className='header__signin'>
          <a href='/signin' className='header__enter'>Войти</a>
        </botton>
      </div>
      )}
    </header>
  );
}
 export default Header;