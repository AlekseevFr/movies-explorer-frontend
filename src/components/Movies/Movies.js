import React, {useEffect, useState} from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';


function Movies() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
        setIsLoading(false);
    },1000);
  },[]);
  return (
    <>
      <div className={
        isOpen ? 'movies__menu_opened' : 'movies__menu'
      }>
        <Header isLoggedIn={true}
          handleMenuClick={
            () => setIsOpen(!isOpen)
          }/>
        <main>
          <SearchForm/>
          <section className="movies">
            {
            isLoading ? <Preloader/>: <MoviesCardList isSaved={true}/>
          } </section>
        </main>
        <Footer/>
      </div>
      {
      isOpen && <Navigation handleClose={
        () => setIsOpen(false)
      }/>
    } </>
  );  
}

export default Movies;
//   return (
//     <>
//     <SearchForm />
//       <section className="movies">
//       {
//           isLoading ?
//             <Preloader />
//             :
//             <MoviesCardList isSaved = {false}/>
//         }
//       </section>
//       </>
//   );
// }

// export default Movies;
