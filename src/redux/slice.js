import { createSlice } from '@reduxjs/toolkit';

import {
  fetchPlanets,
  postLogin,
  postSignUp,
  getAuthentication,
  postData,
} from '../services/api';

import { equal } from '../utils';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    planets: [],
    selectedPlanet: null,
    comment: '',
    loginFields: {
      email: '',
      password: '',
    },
    isLoggedIn: false,
    feelings: [],
  },
  reducers: {
    setPlanets(state, { payload: planets }) {
      return {
        ...state,
        planets,
      };
    },
    setIsLoggedIn(state, { payload: isLoggedIn }) {
      return {
        ...state,
        isLoggedIn,
      };
    },
    selectPlanet(state, { payload: planetId }) {
      const { planets } = state;
      return {
        ...state,
        selectedPlanet: planets.find(equal('id', planetId)),
      };
    },
    changeField: (state, { payload: { name, value } }) => ({
      ...state,
      [name]: value,
    }),
    changeLoginField(state, { payload: { name, value } }) {
      return {
        ...state,
        loginFields: {
          ...state.loginFields,
          [name]: value,
        },
      };
    },
  },
});

export const {
  setPlanets,
  selectPlanet,
  changeField,
  changeLoginField,
  setIsLoggedIn,
} = actions;

export function loadInitialData() {
  return (dispatch) => {
    const planets = fetchPlanets();

    dispatch(setPlanets(planets));
  };
}

export function requestSignUp() {
  return async (dispatch, getState) => {
    const { loginFields } = getState();
    const { email, password } = loginFields;

    await postSignUp({ email, password });
  };
}

export function requestLogin() {
  return async (dispatch, getState) => {
    const { loginFields } = getState();
    const { email, password } = loginFields;

    await postLogin({ email, password });
  };
}

export function loadAuthentication() {
  return async (dispatch) => {
    const response = await getAuthentication();
    const isLoggedIn = !!response;

    dispatch(setIsLoggedIn(isLoggedIn));
  };
}

export function addCommentsData() {
  return async (disaptch, getState) => {
    const initalState = getState();
    const { comment, selectedPlanet } = initalState;

    await postData({ comment, selectedPlanet });
  };
}

export default reducer;
