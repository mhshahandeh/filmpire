import React from 'react';
import { CssBaseline, styled } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from './index';

const Container = styled('div')({
  display: 'flex',
  height: '100%',
});

const Main = styled('main')({
  flexGrow: '1',
  padding: '2em',
});

const Toolbar = styled('div')({
  height: '70px',
});

function App() {
  return (
    <Container>
      <CssBaseline />
      <NavBar />
      <Main>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Main>
    </Container>
  );
}

export default App;
