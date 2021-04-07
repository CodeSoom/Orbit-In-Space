import styled from '@emotion/styled';

import { colors, styles } from '../designSystem';

const Container = styled.div({
  margin: '3em 0',
});

const Title = styled.h1({
  fontSize: '1.5em',
  textAlign: 'center',
});

const ButtonWrapper = styled.div({
  ...styles.center,
  position: 'fixed',
  paddingTop: '1em',
  paddingBottom: '1em',
  bottom: 0,
  left: 0,
  width: '100%',
});

const Button = styled.button({
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

export default function HomePage({ history }) {
  const handleClick = () => {
    history.push('/login');
  };

  return (
    <Container>
      <Title>오늘은 어떤 하루였나요?</Title>
      <ButtonWrapper>
        <Button
          type="button"
          onClick={handleClick}
        >
          로그인
        </Button>
      </ButtonWrapper>
    </Container>
  );
}
