import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import {
  selectPlanet,
} from './redux/slice';

import { colors } from './designSystem';

import { get } from './utils';

const SelectButton = styled.button(({ active }) => ({
  fontSize: '.8em',
  margin: '1em 0',
  padding: '.6em 2em',
  border: '1px solid',
  borderColor: active ? 'transparent' : colors.highlight,
  borderRadius: '15px',
  background: active ? colors.highlight : 'transparent',
  color: colors.white,
  textDecoration: 'none',
  cursor: 'pointer',
}));

export default function PlanetsContainer({ onClickPlanet }) {
  const dispatch = useDispatch();

  const planets = useSelector(get('planets'));
  const selectedPlanet = useSelector(get('selectedPlanet'));

  function handleClick(planetsId) {
    dispatch(selectPlanet(planetsId));
    onClickPlanet();
  }

  const isSelected = (item) => (item.id === selectedPlanet.id);

  return (
    <>
      <ul>
        {planets.map((planet) => (
          <li key={planet.id}>
            <SelectButton
              type="button"
              active={selectedPlanet && isSelected(planet)}
              onClick={() => handleClick(planet.id)}
            >
              {planet.mood}
            </SelectButton>
          </li>
        ))}
      </ul>
    </>
  );
}
