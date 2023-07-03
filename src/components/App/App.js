import {Route, Switch, useHistory} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import mainapi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from "../../contexts/CurrentUserContext";
import NotFound from "../NotFound/NotFound.js"
import React, { useState, useCallback } from 'react';


const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const history = useHistory();

  const getUserInfo = useCallback(async () => {
    return mainapi.getUserInfo().then((res) => {
      setCurrentUser(res);
      setIsLoggedIn(true);
    }).catch(() => history.push('/signin'));
  }, [history]);

  React.useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      getUserInfo()
    }
  }, [getUserInfo, history])

  function handleLogin(data) {
    return mainapi.login(data).then((res) => {
      localStorage.setItem('token', res.token);
      getUserInfo();
      history.push("/movies");
      return;
    }).catch((error) => error);
  }

  const handleEdit = (name, email) => {
    return mainapi.updateUserInfo(name, email).then((res) => {
      setIsLoggedIn(true);
      setCurrentUser(res);
    }).catch(console.error);
  };

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('searchText')
    localStorage.removeItem('filteredMovies')
    localStorage.removeItem('toggle')
    setCurrentUser('');
    history.push("/")
  }

  function handleRegister(data) {
    return mainapi.register(data).then(() => {
      handleLogin({email: data.email, password: data.password})
    }).catch((error) => error);
  }

  return <div className="app">
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Header isLoggedIn={isLoggedIn}></Header>
          <Main/>
          <Footer/>
        </Route>
        <ProtectedRoute path="/movies"
          loggedIn={isLoggedIn}
          component={Movies}/>
        <ProtectedRoute path="/saved-movies"
          loggedIn={isLoggedIn}
          component={SavedMovies}/>
        <ProtectedRoute path="/profile"
          onLogout={handleLogout}
          loggedIn={isLoggedIn}
          onEditProfile={handleEdit}
          component={Profile}/>

        <ProtectedRoute path="/signup"
          loggedIn={!isLoggedIn}
          onSubmit={handleRegister}
          component={Register}/>

        <ProtectedRoute path="/signin"
          loggedIn={!isLoggedIn}
          onSubmit={handleLogin}
          component={Login}/>
          <Route exact path="*">
            <NotFound/>
          </Route>

      </Switch>
    </CurrentUserContext.Provider>
  </div>
}
export default App;