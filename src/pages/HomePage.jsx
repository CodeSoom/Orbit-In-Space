import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { requestLogin } from '../redux/slice';

import { get } from '../utils';

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

const SecondaryButton = styled.button({
  fontSize: '1.4em',
  fontWeight: 600,
  display: 'block',
  padding: '.7em 1em',
  width: '100%',
  borderRadius: '4px',
  border: `2px solid ${colors.highlight}`,
  backgroundColor: 'transparent',
  color: colors.highlight,
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

export default function HomePage({ onClickNext, history }) {
  const dispatch = useDispatch();

  const loggedIn = useSelector(get('loggedIn'));
  const loginFields = useSelector(get('loginFields'));

  useEffect(() => {
    if (loggedIn) {
      onClickNext();

      dispatch(requestLogin(loginFields));
    }
  }, [loggedIn]);

  const handleClickNext = () => {
    history.push('/planets');
  };

  const handleClickSign = () => {
    history.push('/sign');
  };

  const handleClickLogin = () => {
    history.push('/login');
  };

  return (
    <Container>
      <Title>오늘은 어떤 하루였나요?</Title>
      {loggedIn ? (
        <ButtonWrapper>
          <Button
            type="button"
            onClick={handleClickNext}
          >
            다음
          </Button>
        </ButtonWrapper>
      ) : (
        <Buttons>
          <SecondaryButton
            type="button"
            onClick={handleClickSign}
          >
            회원가입
          </SecondaryButton>
          <SecondaryButton
            type="button"
            onClick={handleClickLogin}
          >
            로그인
          </SecondaryButton>
          <PrimaryButton
            type="button"
            onClick={handleClickLogin}
          >
            구글 로그인
          </PrimaryButton>
          <PrimaryButton
            type="button"
            onClick={handleClickLogin}
          >
            깃헙 로그인
          </PrimaryButton>
        </Buttons>
      )}
    </Container>
  );
}
