import React from 'react';
import { Grid, styled } from '@mui/material';
import { Movie } from '..';

const MoviesContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  overflow: 'auto',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}));

function MovieList({ movies, numberOfMovies, excludeFirst }) {
  const startFrom = excludeFirst ? 1 : 0;
  return (
    <MoviesContainer container>
      {movies.results.slice(startFrom, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </MoviesContainer>
  );
}

export default MovieList;
