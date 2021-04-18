import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { images } from '../assets';

import { colors, styles } from '../designSystem';

import { get } from '../utils';

const Container = styled.div({
  margin: '3em auto 0',
  textAlign: 'center',
});

const Title = styled.h1({
  fontSize: '1.5em',
});

const ImageWrapper = styled.div({
  position: 'relative',
  margin: '0 auto',
});

const Rotation = styled.img({
  zIndex: 2,
  position: 'absolute',
  paddingTop: '35%',
  top: 0,
  left: '25%',
  width: '50%',
});

const Image = styled.img({
  zIndex: 1,
  position: 'absolute',
  paddingTop: '10%',
  left: '12%',
  width: '70%',
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

export default function HomePage({ history }) {
  const isLoggedIn = useSelector(get('isLoggedIn'));

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/planets');
    }
  }, [isLoggedIn]);

  const handleClickSign = () => {
    history.push('/sign');
  };

  const handleClickLogin = () => {
    history.push('/login');
  };

  return (
    <Container>
      <Title>오늘은 어떤 하루였나요? 🚀</Title>
      <ImageWrapper>
        <Rotation
          src={images.home.text}
          alt=""
        />
        <Image
          src={images.home.planet}
          alt=""
        />
      </ImageWrapper>
      <Buttons>
        <SecondaryButton
          type="button"
          onClick={handleClickSign}
        >
          회원가입
        </SecondaryButton>
        <PrimaryButton
          type="button"
          onClick={handleClickLogin}
        >
          로그인
        </PrimaryButton>
      </Buttons>
    </Container>
  );
}
