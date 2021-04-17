import { createSlice } from '@reduxjs/toolkit';

import moment from 'moment';

import {
  fetchPlanets,
  postLogin,
  postSignUp,
  getAuthentication,
  postData,
} from '../services/api';

import { equal } from '../utils';

import {
  STATUS_NONE,
  STATUS_ERROR,
} from '../types/status';

const { log } = console;

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    planets: [],
    selectedPlanet: null,
    comment: '',
    createdDate: '',
    feelings: [],
    loginFields: {
      email: '',
      password: '',
    },
    isLoggedIn: false,
    processing: false,
    completion: false,
    status: STATUS_NONE,
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
    setCreatedDate(state, { payload: date }) {
      return {
        ...state,
        createdDate: moment(date).format('YYYY.MM.DD'),
      };
    },
    selectPlanet(state, { payload: planetId }) {
      const { planets } = state;
      return {
        ...state,
        selectedPlanet: planets.find(equal('id', planetId)),
      };
    },
    changeField(state, { payload: { name, value } }) {
      return {
        ...state,
        [name]: value,
      };
    },
    changeLoginField(state, { payload: { name, value } }) {
      return {
        ...state,
        loginFields: {
          ...state.loginFields,
          [name]: value,
        },
      };
    },
    clearCommentField: (state) => ({
      ...state,
      comment: '',
    }),
    startProcess: (state) => ({
      ...state,
      processing: true,
      completion: false,
    }),
    stopProcess: (state) => ({
      ...state,
      processing: false,
      completion: false,
    }),
    complete: (state) => ({
      ...state,
      completion: true,
    }),
    clearStatus: (state) => ({
      ...state,
      status: STATUS_NONE,
    }),
    occurError: (state) => ({
      ...state,
      status: STATUS_ERROR,
    }),
  },
});

export const {
  setPlanets,
  selectPlanet,
  setCreatedDate,
  changeField,
  changeLoginField,
  setIsLoggedIn,
  clearCommentField,
  startProcess,
  stopProcess,
  complete,
  clearStatus,
  occurError,
} = actions;

export function loadInitialData() {
  return (dispatch) => {
    const planets = fetchPlanets();

    dispatch(setPlanets(planets));
  };
}

export function requestSignUp() {
  return async (dispatch, getState) => {
    dispatch(startProcess());
    const { loginFields } = getState();
    const { email, password } = loginFields;

    try {
      await postSignUp({ email, password });

      dispatch(complete());
    } catch (e) {
      log('ERROR', e);

      dispatch(occurError());
      dispatch(stopProcess());
    }
  };
}

export function requestLogin() {
  return async (dispatch, getState) => {
    dispatch(startProcess());

    const { loginFields } = getState();
    const { email, password } = loginFields;

    try {
      await postLogin({ email, password });

      dispatch(complete());
    } catch (e) {
      log('ERROR', e);

      dispatch(occurError());
      dispatch(stopProcess());
    }
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
  return async (dispatch, getState) => {
    const initalState = getState();
    const { comment, selectedPlanet, createdDate } = initalState;

    await postData({ comment, selectedPlanet, createdDate });

    dispatch(clearCommentField());
  };
}

export default reducer;
