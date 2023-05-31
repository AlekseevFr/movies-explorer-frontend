import React from 'react';
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
import {useState} from 'react';


const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(() => {
    const token = localStorage.getItem('token');

    return !! token;
  });
  // const [type, setType] = React.useState(null);
  // const [email, setEmail] = React.useState("");

  const history = useHistory();

  // function checkToken(token) {
  // mainapi.checkToken(token).then((res) => {
  //     setIsLoggedIn(true);
  // }).catch(console.error);
  // }
  React.useEffect(() => {
    if (isLoggedIn) {
        mainapi.getUserInfo().then((res) => setCurrentUser(res.data)).catch(console.error);
    }
      }, [isLoggedIn])

  function handleLogin(data) {
    mainapi.login(data).then((res) => {
      setIsLoggedIn(true);
      localStorage.setItem('token', res.token);
      setCurrentUser(res.data);
      console.log(res);
      history.push("/movies")
    }).catch(console.error);
  }
  function handleRegister(data) {
    mainapi.register(data).then(() => {
      setTimeout(() => {
        history.push("/signin")
      }, 2000);
    }).catch(console.error);
  }

  return <div className="app">
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Header isLoggedIn={false}></Header>
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
          loggedIn={isLoggedIn}
          component={Profile}/>
        <Route exact path="/signup">
          <main>
            <Register onSubmit={handleRegister}/>
          </main>
        </Route>
        <Route exact path="/signin">
          <main>
            <Login onSubmit={handleLogin}/>
          </main>
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  </div>
}
export default App;
