import React, {useEffect, useState} from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../MoreButton/MoreButton';
import './MoviesCardList.css';


function MoviesCardList({isSaved, movies, handleMovieClick}) {
const [pageState, setPageState] = useState({defaultNumber: 12, numberToMap: 3, setNumberToMap: 3});

const {defaultNumber, numberToMap, setNumberToMap} = pageState;
  const changeWidth = () => {
    if (window.innerWidth > 768) {
      return {defaultNumber: 12, numberToMap: 3, setNumberToMap: 3};
    }
    if (window.innerWidth >= 480 && window.innerWidth <= 768) {
      return {defaultNumber: 8, numberToMap: 2, setNumberToMap: 2};
    }
    if (window.innerWidth >= 320 && window.innerWidth < 480) {
      return {defaultNumber: 5, numberToMap: 1, setNumberToMap: 2};
    }
  }
 
    useEffect(() => {
      const resizeHandle = () => {
        setTimeout(()=>{
          setPageState(changeWidth());
        },500);      
      }
      window.addEventListener('resize', resizeHandle);
      return () => {
        window.removeEventListener('resize', resizeHandle);
      }
    }, []);

  const handleMoreClick = () => {
    setPageState((prevState) => ({
      ...prevState,
      defaultNumber: prevState.defaultNumber + prevState.setNumberToMap
    }))
}
 const showMoreButton =() => {
  return movies?.length>=defaultNumber ? <MoreButton onClick={handleMoreClick} /> : null 
}

  return (
    <>
      <ul className='movieslist'>
        {
        movies?.slice(0, defaultNumber).map((movie) => <MoviesCard
          key={movie.id}
          movie={movie}
          isSaved={isSaved}
          handleMovieClick={handleMovieClick} 
        />)
      } </ul>

   {showMoreButton()}     
      
    </>
  );
}

export default MoviesCardList;
