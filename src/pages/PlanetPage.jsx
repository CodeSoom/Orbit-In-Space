import { useParams } from 'react-router-dom';

import styled from '@emotion/styled';

import PlanetContainer from '../containers/PlanetContainer';

const Container = styled.div({
  margin: '1em 0',
});

export default function PlanetPage({ params, history }) {
  const { id } = params || useParams();

  const handleClickRecord = () => {
    history.push('/record');
  };

  return (
    <Container>
      <PlanetContainer
        planetId={id}
        onClcikRecord={handleClickRecord}
      />
    </Container>
  );
}
