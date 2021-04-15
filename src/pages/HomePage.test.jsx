import { render, fireEvent } from '@testing-library/react';

import HomePage from './HomePage';

jest.mock('../assets');
jest.mock('../services/api');
jest.mock('../services/firebase');

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

  it('listens change event and navigates to the login page', () => {
    const { getByText } = renderHomePage();

    fireEvent.click(getByText('로그인'));

    expect(history.push).toBeCalled();
    expect(history.push).toBeCalledWith('/login');
  });
});
