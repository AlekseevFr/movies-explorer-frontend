import React, {useEffect, useState} from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Page from '../Page/Page'
import moviesApi from '../../utils/MovieApi'


function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState(null);
  

  function handleSearchSubmit(searchText) {
    setIsLoading(true)
    moviesApi.getMovies().then((res) => {
      setMovies(res);
      setIsLoading(false)
      localStorage.setItem('searchText', searchText);
    }).catch(console.error);
  }
  return (
    <>
      <Page isOpen={isOpen}>
        <Header isLoggedIn={true}
          handleMenuClick={
            () => setIsOpen(!isOpen)
          }/>
        <main>
          <SearchForm handleSearchSubmit={handleSearchSubmit}/>
          <section className="movies">
            {
            isLoading ? <Preloader/>: <MoviesCardList movies={movies}
              isSaved={false}/>
          } </section>
        </main>
        <Footer/>
      </Page>

      {
      isOpen && <Navigation handleClose={
        () => setIsOpen(false)
      }/>
    } </>
  );
}

export default Movies;
