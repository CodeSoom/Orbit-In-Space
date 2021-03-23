import styled from '@emotion/styled';

const Container = styled.div({
  margin: '1em 0',
})

const Title = styled.h1({
  fontSize: '1.5em',
});

export default function HomePage() {
  return (
    <Container>
      <Title>환영합니다</Title>
    </Container>
  );
}
