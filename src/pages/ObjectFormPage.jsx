import styled from '@emotion/styled';

const Container = styled.div({
  margin: '1em 0',
})

const Title = styled.h1({
  fontSize: '1.5em',
});

export default function ObjectFormPage() {
  return (
    <Container>
      <Title>목표를 설정해볼까요?</Title>
    </Container>
  );
}
