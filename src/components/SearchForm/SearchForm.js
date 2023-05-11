import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className='searchform'>
      <div className='searchform__request'>
        <input className='searchform__input' type="text" placeholder="Фильм" minLength={2} required/>
        <button className='searchform__submit'>Найти</button>
      </div>
      <div className='searchform__switch'>
        <input className="searchform__checkbox" type="checkbox"/>
        <label className='searchform__label'>Короткометражки</label>
      </div>
      <div className='searchform__line'></div>
    </form>
  );
}

export default SearchForm;
