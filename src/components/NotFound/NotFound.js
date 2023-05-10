import React from "react";
import './NotFound.css';

function NotFound() {
  
  return (
    <div className="notfound">
      <div>
        <h1 className="notfound__title">404</h1>
        <p className="notfound__text">Страница не найдена</p>
      </div>      
      <button className="notfound__button" type="button">Назад</button>
    </div>
  );
}

export default NotFound;