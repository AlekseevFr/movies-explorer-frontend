import React from 'react';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
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


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const [type, setType] = React.useState(null);
  // const [email, setEmail] = React.useState("");

  const history = useHistory();

  function checkToken(token) {
   mainapi.checkToken(token)
   .then((res) => {
      setIsLoggedIn(true);
   }).catch(console.error);
   }
   React.useEffect(() => {
       const token = localStorage.getItem('token');
       if (token)setIsLoggedIn(true);
   }, []);

  function handleLogin(data) {
    mainapi.login(data).then((res) => {  setIsLoggedIn(true);
      localStorage.setItem('token', res.token);
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
   <Switch>
      <Route exact path="/">
        <Header isLoggedIn={false}></Header>
        <Main/>
        <Footer/>
      </Route>
      <ProtectedRoute path="/movies" loggedIn={isLoggedIn}>
        <Movies/>
      </ProtectedRoute>
      <ProtectedRoute path="/saved-movies" loggedIn={isLoggedIn}>
        <SavedMovies/>
      </ProtectedRoute>
      <ProtectedRoute path="/profile" loggedIn={isLoggedIn}>
        <Profile/>
      </ProtectedRoute>
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
  </div>
}
export default App;
