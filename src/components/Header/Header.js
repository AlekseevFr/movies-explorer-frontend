import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Icon from '../../images/Icon.svg'
import Menu from '../../images/Menu.svg'

function Header(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <header className='header'>
     <Logo />
      {isLoggedIn ? (
        <>
        <div className='header__films'>
          <a className='header__film' href='*'>Фильмы</a>
          <a className='header__saved-films' href='*'>Сохраненные Фильмы</a>
        </div>
        <div className='header__in'> 
          <a className='header__acc' href='*'>Аккаунт</a>
          <img className='header__icon' src={Icon}  alt="человечек"/>
           </div>
           <button className='header__menu-button'>
            <img className='header__menu-img' src={Menu}  alt="Три линии в столбик"/>
           </button>
           </>
      ) : (
        <div className='header__auth'>
        <a href='*' className='header__reg'>Регистрация</a>
        <botton className='header__signin'>
          <p href='*' className='header__signup'>Войти</p>
        </botton>
      </div>
      )}
    </header>
  );
}
//   return <header className='header'>
//      <Logo />
//     <div className='header__auth'>
//       <a href='*' className='header__reg'>Регистрация</a>
//       <botton className='header__signin'>
//         <p href='*' className='header__signup'>Войти</p>
//       </botton>
//     </div>
//   </header>
// }
 export default Header;