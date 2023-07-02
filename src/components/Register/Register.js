import React from 'react';
import {useState} from 'react';
import './Register.css';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import useForm from '../../hooks/Validators';

 function Register({onSubmit}){
  const [error, setError] = useState(false);
  const {inputs, errors, onChange} = useForm();
  const disabled = Object.keys(errors).length === 3 ? Object.values(errors).some(Boolean) : true;
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await onSubmit(inputs);
    setError(response);
  }
  
  return (
    <main>
    <section className="auth">
      <Logo/>
      <h2 className="auth__title">Добро пожаловать!</h2>
      <form onSubmit={handleSubmit}
        className="auth__form">
        <label className="auth__input-label">Имя</label>
        <input value={inputs.name || ""} 
          onChange={onChange}
          type="text"
          name="name"
          className="auth__input"
          placeholder='Имя'/> {
            errors.name && <span className='auth__error'>
              {
              errors.name
            }</span>
          }
        <label className="auth__input-label">E-mail</label>
        <input value={inputs.email || ""} 
          onChange={onChange}
          type="email"
          name="email"
          className="auth__input"
          placeholder='E-mail'
          autoComplete="off"/>  {
            errors.email && <span className='auth__error'>
              {
              errors.email
            }</span>
          }
        <label className="auth__input-label">Пароль</label>
        <input value={inputs.password || ""} 
          onChange={onChange}
          type="password"
          name="password"
          className="auth__input auth__input_error"
          placeholder='Пароль'
          autoComplete="off"/> {
            errors.password && <span className='auth__error'>
              {
              errors.password
            }</span>
          }
          {
            error && <span className='auth__error'>Что-то пошло не так...{}</span>
          }
        <button disabled={disabled} type="submit"
          className="auth__submit-button">Зарегестрироваться</button>
      </form>
      <p className="auth__redirect">Уже зарегистрированы?
        <Link className="auth__sign" to="/signin">
          Войти</Link>
      </p>

    </section>
    </main>
  );
}

export default Register;
