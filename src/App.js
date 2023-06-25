import React from 'react';
import { MovieProvider } from './MovieContext';
import MovieList from './MovieList';
import MovieSearch from './MovieSearch';
import './App.css';

const App = () => {
  return (
    <MovieProvider>
      <div className="app">
        <h1>React Movie App</h1>
        <MovieSearch />
        <MovieList />
      </div>
    </MovieProvider>
  );
};

export default App;
