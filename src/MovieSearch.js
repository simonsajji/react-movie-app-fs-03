import React, { useContext, useState } from 'react';
import { MovieContext } from './MovieContext';
import './MovieSearch.css';

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useContext(MovieContext);

  const handleSearch = async e => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchQuery}&apikey=7061953a&type=movie&page=1`
      );
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="movie-search" onSubmit={handleSearch}>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearch;
