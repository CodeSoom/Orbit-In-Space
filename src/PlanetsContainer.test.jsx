import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import PlanetsContainer from './PlanetsContainer';

describe('PlanetsContainer', () => {
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

  it('renders planets and listens click event', () => {
    const { container, getByText } = render((
      <PlanetsContainer />
    ));

    expect(container).toHaveTextContent('행복');

    fireEvent.click(getByText('행복'));

    expect(dispatch).toBeCalled();
  });
});
