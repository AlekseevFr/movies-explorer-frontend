import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';


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
    </Switch>
  </div>
}
export default App;
