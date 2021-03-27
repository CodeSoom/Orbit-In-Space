import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from './utils';

const Title = styled.h1({
  fontSize: '1.5em',
});

export default function PlanetContainer() {
  const selectedPlanet = useSelector(get('selectedPlanet'));

  return (
    <>
      <Title>
        오늘은
        {' '}
        {selectedPlanet.mood}
        {' '}
        행성이네요
      </Title>
    </>
  );
}
