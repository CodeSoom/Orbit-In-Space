import { createSlice } from '@reduxjs/toolkit';

import { fetchPlanets } from '../services/api';

import { equal } from '../utils';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    planets: [],
    selectPlanet: null,
  },
  reducers: {
    setPlanets(state, { payload: planets }) {
      return {
        ...state,
        planets,
      };
    },
    selectPlanet(state, { payload: planetId }) {
      const { planets } = state;
      return {
        ...state,
        selectPlanet: planets.find(equal('id', planetId)),
      };
    },
  },
});

export const {
  setPlanets,
  selectPlanet,
} = actions;

export function loadInitialData() {
  return (dispatch) => {
    const planets = fetchPlanets();

    dispatch(setPlanets(planets));
  };
}

export default reducer;
