import styled from '@emotion/styled';

import { colors, styles } from '../designSystem';

const Container = styled.div({
  margin: '3em 0',
});

const Title = styled.h1({
  fontSize: '1.5em',
  textAlign: 'center',
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
