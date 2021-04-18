import styled from '@emotion/styled';

import { colors, styles } from '../designSystem';

const Container = styled.div({
  margin: '3em 0',
  textAlign: 'center',
});

const Title = styled.h1({
  fontSize: '1.5em',
});

const Message = styled.div({
  fontSize: '1.5em',
  marginTop: '1em',
  padding: '2em 0 5em',
  '& span': {
    display: 'block',
  },
  '& strong': {
    fontSize: '2.5em',
    display: 'block',
  },
});

const Buttons = styled.div({
  ...styles.center,
  position: 'fixed',
  paddingTop: '1em',
  paddingBottom: '1em',
  bottom: 0,
  left: 0,
  width: '100%',
  '& button': {
    margin: '1em 0',
  },
});

const PrimaryButton = styled.button({
  fontSize: '1.4em',
  fontWeight: 600,
  display: 'block',
  padding: '.7em 1em',
  width: '100%',
  borderRadius: '4px',
  border: `1px solid ${colors.highlight}`,
  backgroundColor: colors.highlight,
  color: colors.black,
});

export default function SignUpCompletePage({ history }) {
  const handleClick = () => {
    history.push('/planets');
  };

  return (
    <Container>
      <Title>회원가입을 축하합니다! 🎉</Title>
      <Message>
        <strong>👩‍🚀👨‍🚀</strong>
        <span>나만의 우주를</span>
        <span>같이 만들어가요!</span>
      </Message>
      <Buttons>
        <PrimaryButton
          type="button"
          onClick={handleClick}
        >
          확인
        </PrimaryButton>
      </Buttons>
    </Container>
  );
}
