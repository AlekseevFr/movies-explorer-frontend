import React, {useEffect, useState} from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

function SavedMovies() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

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
          <SearchForm/>
          <section className="saved-movies">
            {
            isLoading ? <Preloader/>: <MoviesCardList isSaved={true}/>
          } </section>
        </main>
        <Footer/>
      </div>
      {
      isOpen && <Navigation handleClose={
        () => setIsOpen(false)
      }/>
    } </>
  );  
}

export default SavedMovies;
