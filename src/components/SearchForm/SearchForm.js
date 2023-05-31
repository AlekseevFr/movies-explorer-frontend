import React, {useState} from 'react';
import './SearchForm.css';

function SearchForm({handleSearchSubmit}) {
  const [searchText, setSearchText] = useState(null);

  function handleTextlChange(e) {
    setSearchText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      handleSearchSubmit(searchText);
    } else {
      console.error();
    }
  }
  
  return (
    <form className='searchform'
      onSubmit={handleSubmit}>
      <div className='searchform__request'>
        <input onChange={handleTextlChange}
          value={searchText}
          className='searchform__input'
          type="text"
          placeholder="Фильм"
          minLength={2}
          required/>
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
