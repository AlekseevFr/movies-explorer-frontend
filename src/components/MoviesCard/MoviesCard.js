import React from 'react';
import './MoviesCard.css';
import {ReactComponent as Favorite} from '../../images/Favorite_icon.svg'
import Delete from '../../images/Delete.svg';

const MoviesCard = ({movie, isSaved, handleMovieClick}) => {
  const {
    id,
    duration,
    trailerLink,
    nameRU,
    nameEN,
    image,
    country,
    director,
    year,
    description,
    favorite,
    thumbnail
  } = movie;

  const handleFavoriteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    handleMovieClick({
      movieId: id,
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      nameRU,
      nameEN,
      thumbnail
    });
  }

  return (
    <div className="moviescard"
      onClick={
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          window.open(trailerLink, '_blank');
        }
    }>
      <div className="moviescard__info">
        <h3 className="moviescard__title">
          {nameRU}</h3>

        <span className="moviescard__duration">{
          Math.floor(duration / 60)
        }:{
          String(duration%60).padStart(2, '0')
        }</span>
      </div>
      {
      isSaved ? (
        <button className="moviescard__delete-favorite" type="button"
          onClick={handleFavoriteClick}>
          <img className="moviescard__delete-logo"
            src={Delete}
            alt="Крестик"/>
        </button>
      ) : (
        <button className={
            `moviescard__favorite ${
              favorite ? 'moviescard__favorite_active' : ''
            }`
          }
          onClick={handleFavoriteClick}>
          <Favorite className={`moviescard__favorite-logo`}/>
        </button>
      )
    }
      <img className="moviescard__poster"
        src={image}
        alt="Изображение постера"/>
    </div>
  )
};

export default MoviesCard;
