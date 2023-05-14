import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Poster1 from '../../images/Film1.jpg';
import Poster2 from '../../images/Film2.jpg';
import Poster3 from '../../images/Film3.jpg';
import Poster4 from '../../images/Film4.jpg';
import Poster5 from '../../images/Film5.jpg';
import Poster6 from '../../images/Film6.jpg';


function MoviesCardList({isSaved}) {
  
  return (
    <>
      <ul className='movieslist'>
        <MoviesCard poster={Poster1}
          title='33 слова о дизайне'
          duration='1ч 42м'
          favorite={true}
          isSaved={isSaved}/>

        <MoviesCard poster={Poster2}
          title='33 слова о дизайне'
          duration='1ч 42м'
          favorite={true}
          isSaved={isSaved}/>

        <MoviesCard poster={Poster3}
          title='33 слова о дизайне'
          duration='1ч 42м'
          favorite={true}
          isSaved={isSaved}/>

        <MoviesCard poster={Poster4}
          title='33 слова о дизайне'
          duration='1ч 42м'
          favorite={false}
          isSaved={isSaved}/>

        <MoviesCard poster={Poster5}
          title='33 слова о дизайне'
          duration='1ч 42м'
          favorite={false}
          isSaved={isSaved}/>

        <MoviesCard poster={Poster6}
          title='33 слова о дизайне'
          duration='1ч 42м'
          favorite={false}
          isSaved={isSaved}/>

        <MoviesCard poster={Poster1}
          title='33 слова о дизайне'
          duration='1ч 42м'
          favorite={false}
          isSaved={isSaved}/>

        <MoviesCard poster={Poster2}
          title='33 слова о дизайне'
          duration='1ч 42м'
          favorite={false}
          isSaved={isSaved}/>

        <MoviesCard poster={Poster3}
          title='33 слова о дизайне'
          duration='1ч 42м'
          favorite={false}
          isSaved={isSaved}/>

        <MoviesCard poster={Poster4}
          title='33 слова о дизайне'
          duration='1ч 42м'
          favorite={false}
          isSaved={isSaved}/>

        <MoviesCard poster={Poster5}
          title='33 слова о дизайне'
          duration='1ч 42м'
          favorite={false}
          isSaved={isSaved}/>

        <MoviesCard poster={Poster6}
          title='33 слова о дизайне'
          duration='1ч 42м'
          favorite={false}
          isSaved={isSaved}/>
      </ul>

      <button className="movieslist__button" type="button">Ещё</button>
    </>

  );
}

export default MoviesCardList;
