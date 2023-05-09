import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <>
      <section className="profile">
        <h1 className="profile__hello">
          Привет, Алексей!</h1>
        <div className='profile__input-box'>
          <label className="profile__input-label">Имя</label>
          <input className="profile__input" type="text" value="Алексей" required/>
          </div>

          <div className="profile__line"></div>

          <div className='profile__input-box'>
          <label className="profile__input-label">E-mail</label>
          <input className="profile__input" value="pochta@yandex.ru" required/>
        </div>
        <div className="profile__downbar">
          <button className="profile__edit-button" type="submit">Редактировать</button>
          <button className="profile__exit-button" type="button">Выйти из аккаунта</button>
        </div>
      </section>
    </>
  );
}

export default Profile;
