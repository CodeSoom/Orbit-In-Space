import {
  fetchPlanets,
} from './api';

import PLANETS from '../../fixtures/planets';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchPlanets', () => {
    beforeEach(() => {
      mockFetch(PLANETS);
    });

    it('returns planets', () => {
      const planets = fetchPlanets();

      expect(planets).toEqual(PLANETS);
    });
  });
});
