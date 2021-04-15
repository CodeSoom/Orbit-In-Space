import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import styled from '@emotion/styled';

import Router from './Router';

import { loadAuthentication } from './redux/slice';

import { styles } from './designSystem';

const Container = styled.div({
  ...styles.center,
  fontSize: '16px',
  '@media screen and (min-width: 600px)': {
    fontSize: '20px',
  },
});

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAuthentication());
  }, []);

  return (
    <Container>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Container>
  );
}
