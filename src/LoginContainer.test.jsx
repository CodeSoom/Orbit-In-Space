import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginContainer from './LoginContainer';

describe('LoginContainer', () => {
  const dispatch = jest.fn();
  const handleLoginSubmit = jest.fn();

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

  function renderLoginContainer() {
    return render((
      <LoginContainer onLoginSubmit={handleLoginSubmit} />
    ));
  }

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginContainer();

    expect(getByLabelText('E-mail').value).toBe('test@test.com');
    expect(getByLabelText('Password').value).toBe('1234');
  });

  it('listens change events', () => {
    const { getByLabelText } = renderLoginContainer();

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'new email' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'application/changeLoginField',
      payload: { name: 'email', value: 'new email' },
    });
  });
});
