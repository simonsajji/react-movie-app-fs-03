import React, { useContext, useEffect } from 'react';
import { MovieContext } from './MovieContext';
import axios from 'axios';
import './MovieList.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=movie&apikey=7061953a&type=movie&page=1`
        );
        setMovies(response.data.Search);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [setMovies]);

  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <TransitionGroup className="card-container">
        {movies ? (
          movies.map(movie => (
            <CSSTransition key={movie.imdbID} timeout={500} classNames="fade">
              <div className="card">
                <img src={movie.Poster} alt={movie.Title} />
                <div className="card-content">
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                </div>
              </div>
            </CSSTransition>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </TransitionGroup>
    </div>
  );
};

export default MovieList;
