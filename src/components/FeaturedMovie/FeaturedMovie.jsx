import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const FeaturedCardContainer = styled(Box)({
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'center',
  height: '490px',
  textDecoration: 'none',
});

const StyledCard = styled(Card)({
  position: 'relative',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
});

const StyledCardMedia = styled(CardMedia)({
  position: 'absolute',
  top: '0',
  right: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.575)',
  backgroundBlendMode: 'darken',
});

const StyleCardContent = styled(CardContent)(({ theme }) => ({
  position: 'relative',
  backgroundColor: 'transparent',
  color: '#fff',
  width: '40%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

function FeaturedMovie({ movie }) {
  if (!movie) return null;
  return (
    <FeaturedCardContainer component={Link} to={`/movie/${movie.id}`}>
      <StyledCard>
        <StyledCardMedia
          media="picture"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          title={movie.title}
        />
        <Box padding="20px">
          <StyleCardContent>
            <Typography variant="h5" gutterBottom>{movie.title}</Typography>
            <Typography variant="body2">{movie.overview}</Typography>
          </StyleCardContent>
        </Box>
      </StyledCard>
    </FeaturedCardContainer>
  );
}

export default FeaturedMovie;
