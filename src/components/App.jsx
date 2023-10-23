import React, { useRef } from 'react';
import { CssBaseline, styled } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from './index';
import useAlan from './Alan';

const Container = styled('div')({
  display: 'flex',
  height: '100%',
});

const Main = styled('main')({
  flexGrow: '1',
  padding: '2em',
  width: '100%',
});

const Toolbar = styled('div')({
  height: '70px',
});

function App() {
  const alanBtnContainer = useRef();

  useAlan();

  return (
    <Container>
      <CssBaseline />
      <NavBar />
      <Main>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route exact path="/approved" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Main>
      <div ref={alanBtnContainer} />
    </Container>
  );
}

export default App;
