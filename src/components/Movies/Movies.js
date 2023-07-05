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
import mainApi from '../../utils/MainApi';
import { shortMovies } from '../../helpers';

const moviesURL = 'https://api.nomoreparties.co';

function getMovies() {
  const filteredMovies = localStorage.getItem('filteredMovies');
  return filteredMovies? JSON.parse(filteredMovies) : null;
}

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [allMovies, setAllMovies] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState(getMovies);

  useEffect(() => {
    mainApi.getSavedMovies().then((resp) => {
      setFilteredMovies((prevMovies) => {
        const moviesWithFavorites = prevMovies?.map((movie) => {
          const favoriteMovie = resp.data.find((item) => item.movieId === movie.id);
          if (favoriteMovie) {
            return { ...movie, favorite: true, movieId: favoriteMovie._id }
          }
  
          return movie;
        });

        return moviesWithFavorites;
      });
    }).catch(console.error);
  }, []);

  function saveFilteredMovies(movies, toggle, searchText) {
    const filteredMovies = shortMovies(movies, toggle, searchText);
    if (!filteredMovies.length) {
      setError("Ничего не найдено")
    }
    setFilteredMovies(filteredMovies);
    localStorage.setItem('searchText', searchText);
    localStorage.setItem('toggle', toggle);
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
  }

  function handleToggle(searchText, toggle) {
    saveFilteredMovies(allMovies, toggle, searchText);
  }

  function handleSearchSubmit(searchText, toggle) {
    setError(null);
    if (allMovies) {
      saveFilteredMovies(allMovies, toggle, searchText);
    } else {
      setIsLoading(true);
      moviesApi.getMovies().then((res) => {
        const movies = res.map((movie) => ({
          ...movie,
          image: `${moviesURL}${movie.image.url}`,
          thumbnail: `${moviesURL}${movie.image.formats.thumbnail.url}`,
        }));
        setAllMovies(movies);
        saveFilteredMovies(movies, toggle, searchText);
        setIsLoading(false);
      }).catch(() => {
        setError("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз")
        setIsLoading(false)
      })
    }
  }
  
  function handleMovieClick(movie) {
    const currentMovie = filteredMovies.find((item) => item.id === movie.movieId);

    if (currentMovie.favorite) {
      deleteMovie(currentMovie.movieId)
    } else {
      addMovie(movie);
    }
  }

  function deleteMovie(movieId) {
    mainApi.deleteMovie(movieId).then(() => {
      setFilteredMovies(filteredMovies.map((item) => item.movieId === movieId ? { ...item, favorite: false } : item));
    }).catch(console.error)
  }

  function addMovie(movie) {
    mainApi.saveMovie(movie).then((resp) => {
      const newMovies = filteredMovies.map((item) => item.id === movie.movieId ? { ...item, movieId: resp._id, favorite: true } : item);
      setFilteredMovies(newMovies);
    }).catch(console.error)
  }

  return (
    <>
      <Page isOpen={isOpen}>
        <Header isLoggedIn={true}
          handleMenuClick={
            () => setIsOpen(!isOpen)
          }/>
        <main>
          <SearchForm handleSearchSubmit={handleSearchSubmit} handleToggle={handleToggle} />
          <section className="movies">
            {
            isLoading ? <Preloader/>: error ? <span className='movies__error'>{error}</span> : <MoviesCardList handleMovieClick={handleMovieClick} movies={filteredMovies}
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
