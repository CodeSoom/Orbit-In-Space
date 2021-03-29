import { useState } from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import MoodInputForm from './MoodInputForm';

import { get } from './utils';

import { images } from './assets';

import { mq, colors, styles } from './designSystem';

const Container = styled.div({
  textAlign: 'center',
});

const Title = styled.h1({
  fontSize: '1.5em',
  fontWeight: 400,
  '& strong': {
    fontWeight: 700,
    color: colors.highlight,
  },
});

const Content = styled.div({
  display: 'block',
  margin: '0 auto',
});

const Image = styled.img({
  margin: '2em 0',
  width: '200px',
  height: '200px',
  [mq.desktop]: {
    width: '250px',
    height: '250px',
  },
});

const Description = styled.div({
  fontSize: '1.2em',
  fontWeight: 300,
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

export default function PlanetContainer() {
  const [isOpen, setOpen] = useState(false);

  const selectedPlanet = useSelector(get('selectedPlanet'));

  // TODO: delete this! (테스트 용으로만)
  // const selectedPlanet = {
  //   id: 1,
  //   mood: '행복',
  //   description: '내일도 행복하길 바랄게요!💘',
  // };

  const handleClickModal = () => {
    setOpen(!isOpen);
  };

  return (
    <Container>
      <Title>
        오늘은
        {' '}
        <strong>
          {selectedPlanet.mood}
        </strong>
        {' '}
        행성이네요
      </Title>
      <Content>
        <Image
          src={images.planets[selectedPlanet.id]}
          alt=""
        />
        <Description>{selectedPlanet.description}</Description>
        <ButtonWrapper>
          <Button
            type="button"
            onClick={handleClickModal}
          >
            기록하기
          </Button>
          <MoodInputForm
            open={isOpen}
            onClick={handleClickModal}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  );
}
