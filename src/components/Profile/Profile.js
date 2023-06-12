import React, {useState} from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Page from '../Page/Page'

function Profile({onLogout, onEditProfile}) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState({name: '', email: ''})

  const clickSubmitButton = (evt) => {
    evt.preventDefault();
    onEditProfile(inputs.name, inputs.email);
  }
  const onChange = (evt) => {
    setInputs({
      ...inputs,
      [evt.target.name]: evt.target.value
    })
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
            <h1 className="profile__hello">
              Привет, Алексей!</h1>
            <div className='profile__input-box'>
              <label className="profile__input-label">Имя</label>
              <input className="profile__input"
                onChange={onChange}
                name="name"
                type="text"
                value={inputs.name}
                minLength="2"
                required/>
            </div>
            <div className="profile__line"></div>
            <div className='profile__input-box'>
              <label className="profile__input-label">E-mail</label>
              <input className="profile__input"
                onChange={onChange}
                type="text"
                name='email'
                value={inputs.email}
                autoComplete="off"
                required/>
            </div>
            <div className="profile__downbar">
              <button className="profile__edit-button" type="submit">Редактировать</button>
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
