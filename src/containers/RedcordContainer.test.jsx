import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RecordContainer from './RecordContainer';

jest.mock('../assets');
jest.mock('../services/api');
jest.mock('../services/firebase');

describe('RecordContainer', () => {
  const dispatch = jest.fn();
  const handleClcikAdd = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      feelings: [
        {
          createdAt: '2020.04.08',
          comment: '점심이 맛있어서 행복하다',
          selectedPlanet: { id: 1, mood: '행복' },
        },
        {
          createdAt: '2020.04.09',
          comment: '야근을 해서 힘들다',
          selectedPlanet: { id: 9, mood: '우울' },
        },
      ],
    }));
  });

  function renderRecordContainer() {
    return render((
      <RecordContainer onClickAdd={handleClcikAdd} />
    ));
  }

  // TODO: add test
  // it('renders selected planet and comment', () => {
  //   const { container } = renderRecordContainer();

  //   expect(container).toHaveTextContent('행복');
  //   expect(container).toHaveTextContent('점심이 맛있어서 행복하다');
  //   expect(container).toHaveTextContent('우울');
  // });

  it('listens click event', () => {
    const { getByText } = renderRecordContainer();

    fireEvent.click(getByText(/추가하기/));

    expect(handleClcikAdd).toBeCalled();
  });
});
