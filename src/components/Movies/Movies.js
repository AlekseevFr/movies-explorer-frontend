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

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(() => {
    const movies = localStorage.getItem('filteredMovies');
    return movies? JSON.parse(movies) : null
  });

  useEffect(() => {
    mainApi.getSavedMovies().then((resp) => {
      setMovies((prevMovies) => {
        const moviesWithFavorites = prevMovies?.map((movie) => {
          const favoriteMovie = resp.data.find((item) => item.movieId === movie.id);
          if (favoriteMovie) {
            return { ...movie, favorite: true, id: favoriteMovie._id }
          }
  
          return movie;
        });

        return moviesWithFavorites;
      });
    }).catch(console.error);
  }, []);

  function handleSearchSubmit(searchText, toggle) {
    setIsLoading(true)
    moviesApi.getMovies().then((res) => {
      const movies = res.map((movie) => ({
        ...movie,
        image: `${moviesURL}${movie.image.url}`,
        thumbnail: `${moviesURL}${movie.image.formats.thumbnail.url}`,
      }))
      const filteredMovies = shortMovies(movies, toggle, searchText);
      if (!filteredMovies.length) {
        setError("Ничего не найдено")
      }
      setMovies(filteredMovies);
      setIsLoading(false)
      localStorage.setItem('searchText', searchText);
      localStorage.setItem('toggle', toggle);
      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    }).catch(() => {
      setError("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз")
      setIsLoading(false)
    })
  }
  
  function handleMovieClick(movie) {
    const currentMovie = movies.find((item) => item.id === movie.movieId);

    if (currentMovie.favorite) {
      deleteMovie(movie.movieId)
    } else {
      addMovie(movie);
    }
  }

  function deleteMovie(movieId) {
    mainApi.deleteMovie(movieId).then(() => {
      const newMovies = movies.map((item) => item.id === movieId ? { ...item, favorite: false } : item);
      setMovies(newMovies)
    }).catch(console.error)
  }

  function addMovie(movie) {
    mainApi.saveMovie(movie).then((resp) => {
      const newMovies = movies.map((item) => item.id === movie.movieId ? { ...item, id: resp._id, favorite: true } : item);
      setMovies(newMovies)
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
          <SearchForm handleSearchSubmit={handleSearchSubmit}/>
          <section className="movies">
            {
            isLoading ? <Preloader/>: error ? <span>{error}</span> : <MoviesCardList handleMovieClick={handleMovieClick} movies={movies}
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
