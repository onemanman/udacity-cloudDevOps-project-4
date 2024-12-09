/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`http://a5e2c1a1a58a94acc8ce98bc264f0c07-1996016899.us-east-1.elb.amazonaws.com/movies`)
      .then((response) => {
        setMovies(response.data.movies);
      });
  }, []);

  return (
    <ul>
      {movies.map((movie) => (
        <li className="movieItem" key={movie.id} onClick={() => onMovieClick(movie)}>
          {movie.title}
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
