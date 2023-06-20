import React, {useState, useContext, useMemo} from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Page from '../Page/Page'
import CurrentUserContext from "../../contexts/CurrentUserContext";
import PATTERN from '../../utils/Constants.js';
import useForm from '../../hooks/Validators';



function Profile({onLogout, onEditProfile}) {
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  
  const form = useMemo(() => ({
    defaultInputs: {
      name: currentUser?.name || '',
      email: currentUser?.email || ''
       }
 }), [currentUser]);
 
   const { inputs, errors, disabled, onChange } = useForm(form);

  const clickSubmitButton = (evt) => {
    evt.preventDefault();
    onEditProfile(inputs.name, inputs.email);
  }

  return (
    <>
      <Page isOpen={isOpen}>
        <Header isLoggedIn={true}
          handleMenuClick={
            () => setIsOpen(!isOpen)
          }/>
        <main>
          <form className="profile"
            onSubmit={clickSubmitButton}>
            <h1 className="profile__hello">Привет,{
              currentUser?.name
            }!</h1>
            <div className='profile__input-box'>
              <label className="profile__input-label">Имя</label>
              <input className="profile__input"
                onChange={onChange}
                name="name"
                pattern={PATTERN}
                type="text"
                value={
                  inputs.name
                }
                minLength="2"/>
            </div>
            {
            errors.name && <span className='profile__error'>
              {
              errors.name
            }</span>
          }
            <div className="profile__line"></div>
            <div className='profile__input-box'>
              <label className="profile__input-label">E-mail</label>
              <input className="profile__input"
                onChange={onChange}
                type="text"
                name='email'
                value={
                  inputs.email
                }
                autoComplete="off"/>
            </div>
            {
            errors.email && <span className='profile__error'>
              {
              errors.email
            }</span>
          }
            <div className="profile__downbar">
              <button disabled={disabled}
                className="profile__edit-button"
                type="submit">Редактировать</button>
              <button onClick={onLogout}
                className="profile__exit-button"
                type="button">Выйти из аккаунта</button>
            </div>
          </form>
        </main>
      </Page>
      {
      isOpen && <Navigation handleClose={
        () => setIsOpen(false)
      }/>
    } </>
  );
}

export default Profile;
