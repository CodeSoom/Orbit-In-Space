import { useParams } from 'react-router-dom';

import styled from '@emotion/styled';

import PlanetContainer from '../containers/PlanetContainer';

const Container = styled.div({
  margin: '1em 0',
});

export default function PlanetPage({ params }) {
  const { id } = params || useParams();

  return (
    <Container>
      <PlanetContainer planetId={id} />
    </Container>
  );
}
