import React, {useState} from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={
        isOpen ? 'movies__menu_opened' : 'movies__menu'
      }>
        <Header isLoggedIn={true}
          handleMenuClick={
            () => setIsOpen(!isOpen)
          }/>
        <main>
          <section className="profile">
            <h1 className="profile__hello">
              Привет, Алексей!</h1>
            <div className='profile__input-box'>
              <label className="profile__input-label">Имя</label>
              <input className="profile__input" type="text" value="Алексей" minLength="2" required/>
            </div>

            <div className="profile__line"></div>

            <div className='profile__input-box'>
              <label className="profile__input-label">E-mail</label>
              <input className="profile__input" value="pochta@yandex.ru" autoComplete="off" required/>
            </div>
            <div className="profile__downbar">
              <button className="profile__edit-button" type="submit">Редактировать</button>
              <button className="profile__exit-button" type="button">Выйти из аккаунта</button>
            </div>
          </section>
        </main>
      </div>
      {
      isOpen && <Navigation handleClose={
        () => setIsOpen(false)
      }/>
    } </>
  );
}

export default Profile;
