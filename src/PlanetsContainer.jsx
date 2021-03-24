import { useDispatch, useSelector } from 'react-redux';

import {
  selectPlanet,
} from './redux/slice';

import { get } from './utils';

export default function PlanetsContainer() {
  const dispatch = useDispatch();

  const planets = useSelector(get('planets'));

  function handleClick(planetsId) {
    dispatch(selectPlanet(planetsId));
  }

  return (
    <>
      <ul>
        {planets.map(({ id, mood }) => (
          <li key={id}>
            <button
              type="button"
              onClick={handleClick(id)}
            >
              {mood}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
