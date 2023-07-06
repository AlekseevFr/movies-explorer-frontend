import React, {useState} from 'react';
import './SearchForm.css';

function SearchForm({handleSearchSubmit, handleToggle, isSaved}) {
  const [isError, setIsError] = useState(false);
  const [searchText, setSearchText] = useState(() => {
    if(isSaved) return "";
    const searchText = localStorage.getItem('searchText');
    return searchText? searchText : "";
  });

  const [toggle, setToggle] = useState(() => {
    if(isSaved) return false;
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
      setIsError(false);
    } else {
      setIsError(true);
    }
  }
  const handleСhangeToggle = () => {
    setToggle(!toggle);
    handleToggle(searchText, !toggle);
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
          />
          
        <button className='searchform__submit'>Найти</button>
      </div>
      {isError && <p className="searchform__error">Нужно ввести ключевое слово</p>}
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
