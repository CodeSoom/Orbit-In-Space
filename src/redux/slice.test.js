import reducer, {
  setPlanets,
  selectPlanet,
  changeField,
} from './slice';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      planets: [],
      selectedPlanet: null,
      comment: '',
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
});
