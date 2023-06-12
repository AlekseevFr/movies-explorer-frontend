export const shortMovies = (movies, toggle, text) => movies.filter(function (movie) {
  if (movie.nameRU.toLowerCase().includes(text.toLowerCase())) {
    return toggle ? movie.duration < 40 : true;
  }
  return false;
});