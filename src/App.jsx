import React from 'react';

import styled from '@emotion/styled';

import { BrowserRouter } from 'react-router-dom';

import Router from './Router';

import { styles } from './designSystem'

const Container = styled.div({
  ...styles.center,
  fontSize: '16px',
  minHeight: '100vh',
  '@media screen and (min-width: 600px)': {
    fontSize: '20px',
  },
});

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Container>
  );
}
