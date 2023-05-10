import React from 'react';
import './Register.css';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';

function Register() {
  return (
    <section className="auth">
      <Logo/>
      <h2 className="auth__title">Добро пожаловать!</h2>
      <form className="auth__form">
        <label className="auth__input-label">Имя</label>
        <input type="text" className="auth__input"/>
        <label className="auth__input-label">E-mail</label>
        <input type="email" className="auth__input"/>
        <label className="auth__input-label">Пароль</label>
        <input type="password" className="auth__input auth__input_error"/>
        <span className="auth__error">Что-то пошло не так...</span>
        <button type="submit" className="auth__submit-button">Зарегестрироваться</button>
      </form>
      <p className="auth__redirect">Уже зарегистрированы?
        <Link className="auth__sign" to="/sign-in">
          Войти</Link>
      </p>

    </section>
  );
}

export default Register;
