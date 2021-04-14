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
      <Title>그동안의 기록들 📝</Title>
      <RecordContainer onClickAdd={handleClickAdd} />
    </Container>
  );
}
