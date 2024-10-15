import React from "react";

const Movie = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default Movie;
