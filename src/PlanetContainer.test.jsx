import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import PlanetContainer from './PlanetContainer';

describe('PlanetContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      selectedPlanet: { id: 1, mood: '행복' },
    }));
  });

  it('renders planet', () => {
    const { container } = render((
      <PlanetContainer />
    ));

    expect(container).toHaveTextContent('행복');
  });
});
