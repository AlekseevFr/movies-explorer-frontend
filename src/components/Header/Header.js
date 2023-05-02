import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';

function Header() {
  return <header className='header'>
     <Logo />
    <div className='header__auth'>
      <a href='*' className='header__reg'>Регистрация</a>
      <botton className='header__signin'>
        <p href='*' className='header__signup'>Войти</p>
      </botton>
    </div>
  </header>
}
export default Header;