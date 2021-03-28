import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from './utils';

import { images } from './assets';

import { colors, mq } from './designSystem';

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

const Layout = styled.div({
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

const Slogan = styled.div({
  fontSize: '1.2em',
  fontWeight: 300,
});

export default function PlanetContainer() {
  const selectedPlanet = useSelector(get('selectedPlanet'));

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
      <Layout>
        <Image
          src={images.planets[selectedPlanet.id]}
          alt=""
        />
        <Slogan>{selectedPlanet.description}</Slogan>
        <button type="button">
          기록하기
        </button>
      </Layout>
    </Container>
  );
}
