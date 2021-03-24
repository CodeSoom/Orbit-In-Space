import {
  fetchPlanets,
} from './api';

import PLANETS from '../../features/planets';

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
      const data = fetchPlanets();

      expect(data).toEqual(PLANETS);
    });
  });
});
