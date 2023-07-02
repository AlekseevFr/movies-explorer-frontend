import React from "react";
import { useHistory } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const history = useHistory();
  return (
    <div className="notfound">
      <div>
        <h1 className="notfound__title">404</h1>
        <p className="notfound__text">Страница не найдена</p>
      </div>
      
      <button className="notfound__button" type="button" onClick={() => history.goBack()} >Назад</button>
    </div>
  );
}

export default NotFound;
