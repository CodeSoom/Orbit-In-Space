import { render, fireEvent } from '@testing-library/react';

import SignUpCompletePage from './SignUpCompletePage';

const history = {
  push: jest.fn(),
};

describe('SignUpCompletePage', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    history.push.mockClear();

    handleClick.mockClear();
  });

  function renderSignUpComplete() {
    return render((
      <SignUpCompletePage
        history={history}
        onClick={handleClick}
      />
    ));
  }

  it('renders title', () => {
    const { container } = renderSignUpComplete();

    expect(container).toHaveTextContent('회원가입을 축하합니다');
  });

  it('listens change event and navigates to the planets page', () => {
    const { getByText } = renderSignUpComplete();

    fireEvent.click(getByText('확인'));

    expect(history.push).toBeCalled();
    expect(history.push).toBeCalledWith('/planets');
  });
});
