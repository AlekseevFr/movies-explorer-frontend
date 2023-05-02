import React from 'react';
import logo from '../../images/header-logo.svg';
import './Logo.css';

function Logo(){
  return(
    <a href="/" className="logo">
      <img className="logo-pic" src={logo} alt="Зеленый бублик" />
    </a> 
  );
}

export default Logo;