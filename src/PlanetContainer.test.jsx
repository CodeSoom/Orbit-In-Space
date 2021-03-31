import { fireEvent, render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import PlanetContainer from './PlanetContainer';

jest.mock('./assets');

describe('PlanetContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      selectedPlanet: { id: 1, mood: '행복' },
    }));
  });

  function renderPlanetContainer() {
    return render((
      <PlanetContainer />
    ));
  }

  it('renders planet', () => {
    const { container } = renderPlanetContainer();

    expect(container).toHaveTextContent('행복');
  });

  it('renders buttons and listens button click event', () => {
    const { getByText } = renderPlanetContainer();

    expect(getByText(/오늘의 기분을 기록해보세요/)).not.toBeVisible();

    fireEvent.click(getByText('기록하기'));

    expect(getByText(/오늘의 기분을 기록해보세요/)).toBeVisible();

    fireEvent.click(getByText('확인'));

    expect(getByText(/오늘의 기분을 기록해보세요/)).not.toBeVisible();
  });
});
