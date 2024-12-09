/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieDetail({ movie }) {
  const [details, setDetails] = useState(null);
  useEffect(() => {
    axios
      .get(`http://a5e2c1a1a58a94acc8ce98bc264f0c07-1996016899.us-east-1.elb.amazonaws.com/movies/${movie.id}`)
      .then((response) => {
        setDetails(response.data);
      });
  }, [movie]);

  return (
    <div>
      <h2>{details?.movie.title}</h2>
      <p>{details?.movie.description}</p>
    </div>
  );
}

export default MovieDetail;
