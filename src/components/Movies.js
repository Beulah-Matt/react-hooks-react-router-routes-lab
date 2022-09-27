import React from "react";
import { movies } from "../data";

function Movies(movie) {
  const moviesList =movies.map((movie)=>(
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <h2>Time: {movie.time} m</h2>
      <ul>
        {movie.genres.map((genre)=> (<li key={genre}> {genre}</li>))}
      </ul>
    </div>
  ))
  return (
  <div>
    <h1>Movies Page</h1>
    {moviesList}
     </div>
  );
}

export default Movies;
// This component should render the text `Movies Page` in an `<h1>`, and make a new
// `<div>` for each movie. The `<div>` should contain the movie's title, time and a
// `<ul>` with a list of its genres, each within their own `<li>`.