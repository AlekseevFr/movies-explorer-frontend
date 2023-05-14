import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';


function App() {
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
          <Register/>
        </main>
      </Route>
      <Route exact path="/signin">
        <main>
          <Login/>
        </main>
      </Route>

    </Switch>
  </div>
}
export default App;
