import reducer, {
  setPlanets,
  selectPlanet,
  setCreatedDate,
  changeField,
  changeLoginField,
  setIsLoggedIn,
  startProcess,
  stopProcess,
  complete,
  clearStatus,
  occurError,
} from './slice';

import {
  STATUS_NONE,
  STATUS_ERROR,
} from '../types/status';

jest.mock('../services/api');

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
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
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });
      expect(state).toEqual(initialState);
    });
  });

  describe('setPlanets', () => {
    it('changes planets', () => {
      const initialState = {
        planets: [],
      };
      const planets = [
        { id: 1, mood: '행복' },
      ];
      const state = reducer(initialState, setPlanets(planets));
      expect(state.planets).toHaveLength(1);
    });
  });

  describe('setCreatedDate', () => {
    it('changes planets', () => {
      const initialState = {
        createdDate: '',
      };
      const state = reducer(initialState, setCreatedDate('20200416'));
      expect(state.createdDate).toEqual('2020.04.16');
    });
  });

  describe('setIsLoggedIn', () => {
    it('change isLoggedIn', () => {
      const initialState = {
        isLoggedIn: false,
      };

      const state = reducer(initialState, setIsLoggedIn(true));

      expect(state.isLoggedIn).toBe(true);
    });
  });

  describe('selectPlanet', () => {
    it('changes selected planet', () => {
      const initialState = {
        planets: [
          { id: 1, mood: '행복' },
        ],
        selectedPlanet: null,
      };
      const state = reducer(initialState, selectPlanet(1));
      expect(state.selectedPlanet).toEqual({
        id: 1,
        mood: '행복',
      });
    });
  });

  describe('changeField', () => {
    it('changes value of field', () => {
      const initialState = {
        comment: '',
      };

      const state = reducer(initialState, changeField({
        name: 'comment',
        value: '점심이 맛있어서 행복하다',
      }));

      expect(state.comment).toEqual('점심이 맛있어서 행복하다');
    });
  });

  describe('changeLoginField', () => {
    context('when email is changed', () => {
      it('changes only email field', () => {
        const initialState = {
          loginFields: {
            email: 'email',
            password: 'password',
          },
        };
        const state = reducer(
          initialState,
          changeLoginField({ name: 'email', value: 'test' }),
        );
        expect(state.loginFields.email).toBe('test');
        expect(state.loginFields.password).toBe('password');
      });
    });

    context('when password is changed', () => {
      it('changes only password field', () => {
        const initialState = {
          loginFields: {
            email: 'email',
            password: 'password',
          },
        };
        const state = reducer(
          initialState,
          changeLoginField({ name: 'password', value: 'test' }),
        );
        expect(state.loginFields.email).toBe('email');
        expect(state.loginFields.password).toBe('test');
      });
    });
  });

  describe('stopProcess', () => {
    it('sets not processing', () => {
      const state = reducer({
        processing: true,
        completion: true,
      }, stopProcess());

      expect(state.processing).toBeFalsy();
      expect(state.completion).toBeFalsy();
    });
  });

  describe('startProcess', () => {
    it('sets processing', () => {
      const state = reducer({
        processing: false,
        completion: true,
      }, startProcess());

      expect(state.processing).toBeTruthy();
      expect(state.completion).toBeFalsy();
    });
  });

  describe('complete', () => {
    it('sets completion is true', () => {
      const state = reducer({
        completion: true,
      }, complete());

      expect(state.completion).toBeTruthy();
    });
  });

  describe('occurError', () => {
    it('sets status error', () => {
      const state = reducer({
        status: '',
      }, occurError());

      expect(state.status).toBe(STATUS_ERROR);
    });
  });

  describe('clearStatus', () => {
    it('sets status with STATUS_NONE', () => {
      const state = reducer({
        status: STATUS_ERROR,
      }, clearStatus());

      expect(state.status).toBe(STATUS_NONE);
    });
  });
});
