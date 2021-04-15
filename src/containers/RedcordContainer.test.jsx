import { render, fireEvent } from '@testing-library/react';

import RecordContainer from './RecordContainer';

jest.mock('../assets');
jest.mock('../services/api');
jest.mock('../services/firebase');

describe('RecordContainer', () => {
  const handleClcikAdd = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderRecordContainer() {
    return render((
      <RecordContainer onClickAdd={handleClcikAdd} />
    ));
  }

  it('listens click event', () => {
    const { getAllByText } = renderRecordContainer();

    const buttons = getAllByText(/추가하기/);
    fireEvent.click(buttons[1]);

    expect(handleClcikAdd).toBeCalled();
  });
});
