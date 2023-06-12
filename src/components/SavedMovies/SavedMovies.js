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
  const [movies, setMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    mainApi.getSavedMovies().then((resp) => {
      setIsLoading(false);
      setMovies(resp.data.map((movie) => ({ ...movie, id: movie._id })));
    }).catch(() => {
      setIsLoading(false);
      setError("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
    });
  }, []);

  const handleSearchSubmit = (searchText, toggle) => {
    const filteredMovies = shortMovies(movies, toggle, searchText);
    if (!filteredMovies.length) {
      setError("Ничего не найдено")
    }
    setMovies(filteredMovies);
  }

  const handleMovieDelete = (movie) => {
    mainApi.deleteMovie(movie.movieId).then(() => {
      const newMovies = movies.filter((item) => item.id !== movie.movieId);
      setMovies(newMovies)
    }).catch(console.error)
  }

  return (
    <>
     <Page isOpen={isOpen}>
        <Header isLoggedIn={true} handleMenuClick={() => setIsOpen(!isOpen)} />
        <main>
          <SearchForm handleSearchSubmit={handleSearchSubmit} />
          <section className="saved-movies">
            {isLoading ? <Preloader/> : error ? <span>{error}</span> : <MoviesCardList movies={movies} handleMovieClick={handleMovieDelete} isSaved />}
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