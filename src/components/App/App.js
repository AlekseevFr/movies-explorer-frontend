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
    if (token)checkToken(token);
 }, []);
 
  function handleLogin(data) {
    mainapi.login(data).then((res) => {
      checkToken(res.token);
      localStorage.setItem('token', res.token);
    }).catch(console.error);
  }
  function handleRegister(data) {
    mainapi.register(data).then(() => {
      setTimeout(() => {
        history.push("/sign-in")
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
      <Route path="/movies">
        <Movies/>
      </Route>
      <Route path="/saved-movies">
        <SavedMovies/>
      </Route>
      <Route path="/profile">
        <Profile/>
      </Route>
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
