import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textOverflow: 'ellipsis',
  width: '230px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  marginTop: '10px',
  marginBottom: 0,
  textAlign: 'center',
}));

const Links = styled(Link)(({ theme }) => ({
  alignItems: 'center',
  fontWeight: 'bolder',
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
  },
  '&:hover': {
    cursor: 'pointer',
  },
  textDecoration: 'none',
}));

const Image = styled('img')(({
  borderRadius: '20px',
  height: '300px',
  marginBottom: '10px',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

function Movie({ movie, i }) {
  console.log(movie, i);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} p="10px">
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Links to={`/movie/${movie.id}`}>
          <Image
            alt={movie.title}
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://www.filmurray.com/200/300'}
          />
          <Title variant="h5">
            {movie.title}
          </Title>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Links>
      </Grow>
    </Grid>
  );
}

export default Movie;
