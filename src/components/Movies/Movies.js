import React, {useEffect, useState} from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Page from '../Page/Page'


function Movies() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <Page isOpen={isOpen}>
        <Header isLoggedIn={true}
          handleMenuClick={
            () => setIsOpen(!isOpen)
          }/>
        <main>
          <SearchForm/>
          <section className="movies">
            {
            isLoading ? <Preloader/>: <MoviesCardList isSaved={false}/>
          } </section>
        </main>
        <Footer/>
      </Page>

      {
      isOpen && <Navigation handleClose={
        () => setIsOpen(false)
      }/>
    } </>
  );
}

export default Movies;
