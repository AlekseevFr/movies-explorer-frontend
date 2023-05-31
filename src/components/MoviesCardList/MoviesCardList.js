import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({isSaved, movies}) {
  const moviesURL = 'https://api.nomoreparties.co';
  console.log(movies);
  return (
    <>
      <ul className='movieslist'>
        {
        movies?.map((movie) => <MoviesCard duration={
            movie.duration
          }
          link={
            movie.trailerLink
          }
          key={
            movie.id
          }
          title={
            movie.nameRU
          }
          poster={
            `${moviesURL}${
              movie.image.url
            }`
          }
          favorite={false}
          isSaved={isSaved}/>)
      } </ul>

      <button className="movieslist__button" type="button">Ещё</button>
    </>
  );
}

export default MoviesCardList;
