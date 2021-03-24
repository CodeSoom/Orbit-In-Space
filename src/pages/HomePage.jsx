import styled from '@emotion/styled';

const Container = styled.div({
  margin: '3em 0',
});

const Title = styled.h1({
  fontSize: '1.5em',
  textAlign: 'center',
});

export default function HomePage({ history }) {
  const handleClick = () => {
    history.push('/planets');
  };

  return (
    <Container>
      <Title>오늘은 어떤 하루였나요?</Title>
      <button
        type="button"
        onClick={handleClick}
      >
        선택하기
      </button>
    </Container>
  );
}
