import React from 'react';
import {useState} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import useForm from '../../hooks/Validators';

function Login({onSubmit}) {

  const [error, setError] = useState(false);
  const {inputs, errors, disabled, onChange} = useForm();

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await onSubmit(inputs);
    setError(response);
    console.log(response);
  }
  return (
    <main>
    <section className="auth">
      <Logo/>
      <h2 className="auth__title">Рады видеть!</h2>
      <form className="auth__form"
        onSubmit={handleSubmit}>
        <label className="auth__input-label">E-mail</label>
        <input value={inputs.email || ""} 
          onChange={onChange}
          type="email"
          name="email"
          className="auth__input"
          autoComplete="off"
          placeholder='E-mail'/>
          {
            errors.email && <span className='login__error'>
              {
              errors.email
            }</span>
          }
        <label className="auth__input-label">Пароль</label>
        <input onChange={onChange}
          value={inputs.password || ""} 
          type="password"
          name="password"
          className="auth__input"
          placeholder='Пароль'
          autoComplete="off"/>
          {
            errors.password && <span className='login__error'>
              {
              errors.password
            }</span>
          }
           {
            error && <span className='login__error'>Что-то пошло не так...{}</span>
          }
        <button disabled={disabled} type="submit" className="auth__submit-button">Войти</button>
      </form>
      <p className="auth__redirect">Ещё не зарегистрированы?
        <Link className="auth__sign" to="/signup">
          Регистрация</Link>
      </p>
    </section>
    </main>
  );
}

export default Login;
