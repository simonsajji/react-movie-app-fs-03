import React, { useContext, useState } from 'react';
import { MovieContext } from './MovieContext';
import axios from 'axios';

const SearchForm = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [query, setQuery] = useState('');

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${query}&apikey=7061953a`
      );
      setMovies(response.data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchMovies();
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
