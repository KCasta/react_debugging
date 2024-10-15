import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Fillter";
import movies from "./moviesData"; // Assuming you have a moviesData.js

const App = () => {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = (title, rating) => {
    let filtered = movies;

    if (title) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (rating) {
      filtered = filtered.filter((movie) => movie.rating >= rating);
    }

    setFilteredMovies(filtered);
  };

  return (
    <div>
      <h1>Movie Filter App</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
