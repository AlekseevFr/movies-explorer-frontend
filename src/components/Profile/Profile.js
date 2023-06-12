import React, {useState, useContext, useEffect} from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Page from '../Page/Page'
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile({onLogout, onEditProfile, defaultValue}) {
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    if (currentUser) {
      setInputs({
        name: currentUser?.name || '',
        email: currentUser?.email || '',
      })
    }
  }, [currentUser]);

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
console.log(currentUser);
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
            <h1 className="profile__hello">Привет,{currentUser?.name}!</h1>
            <div className='profile__input-box'>
              <label className="profile__input-label">Имя</label>
              <input className="profile__input"
                onChange={onChange}
                name="name"
                type="text"
                value={inputs.name}
                minLength="2"
              />
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
              />
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
