import { render, fireEvent, waitFor } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import PlanetContainer from './PlanetContainer';

jest.mock('../assets');
jest.mock('../services/api');
jest.mock('../services/firebase');

describe('PlanetContainer', () => {
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

    expect(getByText(/오늘의 기분을 남겨보세요/)).not.toBeVisible();

    fireEvent.click(getByText('오늘의 한줄 작성하기'));

    expect(getByText(/오늘의 기분을 남겨보세요/)).toBeVisible();

    fireEvent.click(getByText('확인'));

    waitFor(() => expect(getByText(/오늘의 기분을 남겨보세요/)).not.toBeVisible());
  });

  it('listens change event', () => {
    const { getByText, getByLabelText } = renderPlanetContainer();

    fireEvent.click(getByText('오늘의 한줄 작성하기'));

    fireEvent.change(getByLabelText(/오늘의 기분을 남겨보세요/), {
      target: { value: '맛있는 점심을 먹어서 행복했다!' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'application/changeField',
      payload: {
        name: 'comment',
        value: '맛있는 점심을 먹어서 행복했다!',
      },
    });
  });
});
