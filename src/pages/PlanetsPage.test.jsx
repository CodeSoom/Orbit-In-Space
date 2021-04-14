import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import PlanetsPage from './PlanetsPage';

jest.mock('../assets');
jest.mock('../services/api');

describe('PlanetsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      planets: [
        { id: 1, mood: '행복' },
      ],
    }));
  });

  function renderPlanetsPage() {
    return render((
      <PlanetsPage />
    ));
  }

  it('renders title', () => {
    const { container } = renderPlanetsPage();

    expect(container).toHaveTextContent(/행성을 선택하세요/);
  });

  it('renders planets and select buttons', () => {
    const { queryByText } = renderPlanetsPage();

    expect(dispatch).toBeCalled();

    expect(queryByText('행복')).not.toBeNull();
  });
});
