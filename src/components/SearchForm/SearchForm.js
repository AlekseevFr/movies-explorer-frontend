import React, {useState} from 'react';
import './SearchForm.css';

function SearchForm({handleSearchSubmit}) {
  const [searchText, setSearchText] = useState(() => {
    const searchText = localStorage.getItem('searchText');
    return searchText? searchText : "";
  });
  const [toggle, setToggle] = useState(() => {
    const toggle = localStorage.getItem('toggle');
    return toggle? JSON.parse(toggle) : false;
  });
  function handleTextlChange(e) {
    setSearchText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      handleSearchSubmit(searchText, toggle);
    } else {
      console.error();
    }
  }
  const handleСhangeToggle = () => {
    setToggle(!toggle)
  }
  console.log(toggle);
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
        <input onChange={handleСhangeToggle}
          checked={toggle}
          className='searchform__checkbox'
          type="checkbox"/>
        <label className='searchform__label'>Короткометражки</label>
      </div>
      <div className='searchform__line'></div>
    </form>
  );
}

export default SearchForm;
