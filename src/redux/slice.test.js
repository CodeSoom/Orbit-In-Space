import reducer, {
  setPlanets,
  selectPlanet,
  loadInitialData,
} from './slice';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      planets: [],
      selectPlanet: null,
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

  describe('selectPlanet', () => {
    it('changes selected planet', () => {
      const initialState = {
        planets: [
        { id: 1, mood: '행복' },
        ],
        selectPlanet: null,
      };
      const state = reducer(initialState, selectPlanet(1));
      expect(state.selectPlanet).toEqual({
        id: 1,
        mood: '행복',
      });
    });
  });
});


