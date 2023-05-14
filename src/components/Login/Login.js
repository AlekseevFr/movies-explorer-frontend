import React from 'react';
import {useState} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';

function Login({onSubmit}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({email, password});
  }
  return (
    <section className="auth">
      <Logo/>
      <h2 className="auth__title">Рады видеть!</h2>
      <form className="auth__form"
        onSubmit={handleSubmit}>
        <label className="auth__input-label">E-mail</label>
        <input value={email}
          onChange={handleEmailChange}
          type="email"
          className="auth__input"
          autoComplete="off"
          placeholder='E-mail'
          required/>
        <label value={password}
          onChange={handlePasswordChange}
          className="auth__input-label">Пароль</label>
        <input type="password" className="auth__input" placeholder='Пароль' autoComplete="off" minLength="8" required/>
        <button type="submit" className="auth__submit-button">Войти</button>
      </form>
      <p className="auth__redirect">Ещё не зарегистрированы?
        <Link className="auth__sign" to="/signup">
          Регистрация</Link>
      </p>

    </section>
  );
}

export default Login;
