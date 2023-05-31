import React from 'react';
import './MoviesCard.css';
import {ReactComponent as Favorite} from '../../images/Favorite_icon.svg'
import Delete from '../../images/Delete.svg';


const MoviesCard = ({
  title,
  duration,
  poster,
  favorite,
  isSaved,
  link
}) => (
  <a href={link
  } className="moviescard">
    <div className="moviescard__info">
      <h3 className="moviescard__title">
        {title}</h3>
      <p className="moviescard__duration">
        {duration}</p>
    </div>
    {
    isSaved ? (
      <button className="moviescard__delete-favorite" type="button">
        <img className="moviescard__delete-logo"
          src={Delete}
          alt="Крестик"/>
      </button>
    ) : (
      <button className={
        `moviescard__favorite ${
          favorite ? 'moviescard__favorite_active' : ''
        }`
      }>
        <Favorite className={`moviescard__favorite-logo`}/>
      </button>
    )
  }
    <img className="moviescard__poster"
      src={poster}
      alt="Изображение постера"/>
  </a>
);

export default MoviesCard;
