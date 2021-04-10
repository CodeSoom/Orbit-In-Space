import styled from '@emotion/styled';

import SignUpContainer from '../containers/SignUpContainer';

const Container = styled.div({
  margin: '3em 0',
});

const Title = styled.h1({
  fontSize: '1.5em',
  textAlign: 'center',
});

export default function SignPage() {
  return (
    <Container>
      <Title>회원가입해주세요</Title>
      <SignUpContainer />
    </Container>
  );
}
