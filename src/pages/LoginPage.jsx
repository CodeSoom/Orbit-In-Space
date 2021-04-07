import styled from '@emotion/styled';

import LoginContainer from '../LoginContainer';

const Container = styled.div({
  margin: '3em 0',
});

const Title = styled.h1({
  fontSize: '1.5em',
  textAlign: 'center',
});

export default function LoginPage() {
  return (
    <Container>
      <Title>로그인해주세요</Title>
      <LoginContainer />
    </Container>
  );
}
