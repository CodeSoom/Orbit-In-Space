import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import {
  selectPlanet,
} from '../redux/slice';

import { colors, mq } from '../designSystem';

import { images } from '../assets';

import { get } from '../utils';

const UL = styled.ul({
  textAlign: 'center',
});

const List = styled.li({
  display: 'inline-flex',
  margin: '1em .5em 0',
  '&: first-of-type': {
    marginTop: '4em',
  },
});

const SelectButton = styled.button({
  fontSize: '1em',
  border: 'transparent',
  background: 'transparent',
  color: colors.white,
  textDecoration: 'none',
  cursor: 'pointer',
});

const ImageWrapper = styled.div({
  display: 'block',
  marginBottom: '.5em',
  '& img': {
    width: '90px',
    height: '90px',
    [mq.desktop]: {
      width: '130px',
      height: '130px',
    },
  },
});

export default function PlanetsContainer({ onClickPlanet }) {
  const dispatch = useDispatch();

  const planets = useSelector(get('planets'));
  const selectedPlanet = useSelector(get('selectedPlanet'));

  function handleClick(planetsId) {
    dispatch(selectPlanet(planetsId));
    onClickPlanet(planetsId);
  }

  const isSelected = (item) => (item.id === selectedPlanet.id);

  return (
    <>
      <UL>
        {planets.map((planet) => (
          <List key={planet.id}>
            <SelectButton
              type="button"
              active={selectedPlanet && isSelected(planet)}
              onClick={() => handleClick(planet.id)}
            >
              <ImageWrapper>
                <img
                  src={images.planets[planet.id]}
                  alt=""
                />
              </ImageWrapper>
              {planet.mood}
            </SelectButton>
          </List>
        ))}
      </UL>
    </>
  );
}
