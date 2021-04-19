import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import {
  loadInitialData,
} from '../redux/slice';

import PlanetsContainer from '../containers/PlanetsContainer';

const Container = styled.div({
  margin: '3em 0',
});

const Title = styled.h1({
  fontSize: '1.5em',
  textAlign: 'center',
});

export default function PlanetsPage({ history }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  function handleClickPlanet(planetsId) {
    const url = `/planets/${planetsId}`;
    history.push(url);
  }

  return (
    <Container>
      <Title>오늘의 행성을 선택하세요 🪐</Title>
      <PlanetsContainer onClickPlanet={handleClickPlanet} />
    </Container>
  );
}
