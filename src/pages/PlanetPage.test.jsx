import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import PlanetPage from './PlanetPage';

jest.mock('../assets');

describe('PlanetPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      selectedPlanet: { id: 1, mood: '행복' },
    }));
  });

  it('renders title', () => {
    const params = { id: '1' };

    const { container } = render(<PlanetPage params={params} />);

    expect(container).toHaveTextContent('오늘은 행복 행성이네요');
  });
});
