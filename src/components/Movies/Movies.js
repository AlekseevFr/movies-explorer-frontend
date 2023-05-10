import React from 'react';
import { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
        setIsLoading(false);
    },1000);
  },[]);
  return (
    <>
    <SearchForm />
      <section className="movies">
      {
          isLoading ?
            <Preloader />
            :
            <MoviesCardList isSaved = {false}/>
        }
      </section>
      </>
  );
}

export default Movies;
