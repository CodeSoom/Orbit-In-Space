import { render, fireEvent } from '@testing-library/react';

import HomePage from './HomePage';

const history = {
  push: jest.fn(),
};

describe('HomePage', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    history.push.mockClear();
    handleClick.mockClear();
  });

  function renderHomePage() {
    return render((
      <HomePage
        history={history}
        onClick={handleClick}
      />
    ));
  }

  it('renders title', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('오늘은 어떤 하루였나요?');
  });

  it('listens change event and navigates to the planets page', () => {
    const { getByText } = renderHomePage();

    fireEvent.click(getByText('선택하기'));

    expect(history.push).toBeCalled();
    expect(history.push).toBeCalledWith('/planets');
  });
});
