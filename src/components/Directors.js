import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsList =directors.map((director)=>(
    <div key={director.name}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((mov)=> (<li key={mov}>{mov}</li>))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Directors Page</h1>
    {directorsList}
    </div>
  );
}

export default Directors;
// This component should render the text `Directors Page` in an `<h1>`, and make a
// new `<div>` for each director. The `<div>` should contain the director's name
// and a `<ul>` with a list of their movies.