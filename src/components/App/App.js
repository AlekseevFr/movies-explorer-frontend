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
import Navigation from '../Navigation/Navigation';


function App() {
  return <div className="app">
    <Switch>
      <Route exact path="/">
        <Header isLoggedIn={false}></Header>
        <main>
          <Main/>
        </main>
        <Footer/>
      </Route>
      <Route path="/movies">
        <Header isLoggedIn={true}/>
        <main>
          <Movies/>
        </main>
        <Footer/>
      </Route>
      <Route path="/saved-movies">
        <Header isLoggedIn={true}/>
        <main>
        <SavedMovies />
        </main>
        <Footer/>
      </Route>
      <Route path="/profile">
          <Header isLoggedIn={true} />
          <main>
            <Profile/>
          </main>         
        </Route>
        <Route exact path="/signup">
          <main>
            <Register />
          </main>
        </Route>
        <Route exact path="/signin">
          <main>
            <Login />
          </main>
        </Route>
        <Route path="/nav">          
            <Navigation/>
        </Route>
    </Switch>
  </div>
}
export default App;
