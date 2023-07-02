import React, {useEffect, useState} from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Page from '../Page/Page'
import mainApi from '../../utils/MainApi';
import { shortMovies } from '../../helpers';


function SavedMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    mainApi.getSavedMovies().then((resp) => {
      setIsLoading(false);
      const movies = resp.data.map((movie) => ({ ...movie, id: movie._id }));
      setAllMovies(movies);
      setFilteredMovies(movies);
    }).catch(() => {
      setIsLoading(false);
      setError("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
    });
  }, []);

  const handleSearchSubmit = (searchText, toggle) => {
    const filteredMovies = shortMovies(allMovies, toggle, searchText);
    if (!filteredMovies.length) {
      setError("Ничего не найдено")
    }
    setFilteredMovies(filteredMovies);
  }

  const handleMovieDelete = (movie) => {
    mainApi.deleteMovie(movie.movieId).then(() => {
      setAllMovies(allMovies.filter((item) => item.id !== movie.movieId));
      setFilteredMovies(filteredMovies.filter((item) => item.id !== movie.movieId));
    }).catch(console.error)
  }

  return (
    <>
     <Page isOpen={isOpen}>
        <Header isLoggedIn={true} handleMenuClick={() => setIsOpen(!isOpen)} />
        <main>
          <SearchForm handleSearchSubmit={handleSearchSubmit} handleToggle={handleSearchSubmit} isSaved />
          <section className="saved-movies">
            {isLoading ? <Preloader/> : error ? <span className="saved-movies__error">{error}</span> : <MoviesCardList movies={filteredMovies} handleMovieClick={handleMovieDelete} isSaved />}
          </section>
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

export default SavedMovies;