import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';

function Register() {
  return (
    <section className="auth">
      <Logo/>
      <h2 className="auth__title">Рады видеть!</h2>
      <form className="auth__form">
        <label className="auth__input-label">E-mail</label>
        <input type="email" className="auth__input" autoComplete="off" required/>
        <label className="auth__input-label">Пароль</label>
        <input type="password" className="auth__input" autoComplete="off" minLength="8" required/>
        <button type="submit" className="auth__submit-button">Войти</button>
      </form>
      <p className="auth__redirect">Ещё не зарегистрированы?
        <Link className="auth__sign" to="/sign-up">
          Регистрация</Link>
      </p>

    </section>
  );
}

export default Register;