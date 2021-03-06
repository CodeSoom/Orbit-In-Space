import styled from '@emotion/styled';

import LoginContainer from '../containers/LoginContainer';

const Container = styled.div({
  margin: '3em 0',
});

const Title = styled.h1({
  fontSize: '1.5em',
  textAlign: 'center',
});

export default function LoginPage({ history }) {
  const handleSubmit = () => {
    history.push('/planets');
  };

  return (
    <Container>
      <Title>로그인 해주세요</Title>
      <LoginContainer onSubmit={handleSubmit} />
    </Container>
  );
}
