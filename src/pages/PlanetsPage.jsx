import styled from '@emotion/styled';

const Container = styled.div({
  margin: '1em 0',
})

const Title = styled.h1({
  fontSize: '1.5em',
});

export default function PlanetsPage() {
  return (
    <Container>
      <Title>행성을 클릭해주세요</Title>
    </Container>
  );
}
