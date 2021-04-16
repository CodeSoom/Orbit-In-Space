import styled from '@emotion/styled';

import RecordContainer from '../containers/RecordContainer';

const Container = styled.div({
  margin: '3em 0',
});

const Title = styled.h1({
  fontSize: '1.5em',
  textAlign: 'center',
});

export default function PlanetsPage({ history }) {
  function handleClickAdd() {
    history.push('/planets');
  }

  return (
    <Container>
      <Title>나의 행성들 🌟</Title>
      <RecordContainer onClickAdd={handleClickAdd} />
    </Container>
  );
}
