import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import PlanetPage from './PlanetPage';

jest.mock('../assets');
jest.mock('../services/api');
jest.mock('../services/firebase');

describe('PlanetPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedPlanet: { id: 1, mood: '행복' },
      comment: '',
      createdDate: '',
    }));
  });

  it('renders title', () => {
    const params = { id: '1' };

    const { container } = render(<PlanetPage params={params} />);

    expect(container).toHaveTextContent('오늘은 행복 행성이네요');
  });
});
