import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import SignUpContainer from './SignUpContainer';

describe('SignUpContainer', () => {
  const dispatch = jest.fn();
  const handleSignUpSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test.com',
        password: '1234',
      },
    }));
  });

  function renderSignUpContainer() {
    return render((
      <SignUpContainer onSubmit={handleSignUpSubmit} />
    ));
  }

  it('renders input controls', () => {
    const { getByLabelText } = renderSignUpContainer();

    expect(getByLabelText('이메일').value).toBe('test@test.com');
    expect(getByLabelText('비밀번호').value).toBe('1234');
  });

  it('listens change events', () => {
    const { getByLabelText } = renderSignUpContainer();

    fireEvent.change(getByLabelText('이메일'), {
      target: { value: 'new email' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'application/changeLoginField',
      payload: { name: 'email', value: 'new email' },
    });
  });
});
