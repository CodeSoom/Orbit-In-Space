import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginContainer from './LoginContainer';

import {
  STATUS_NONE,
  STATUS_ERROR,
} from '../types/status';

jest.mock('../services/api');

describe('LoginContainer', () => {
  const dispatch = jest.fn();
  const handleLoginSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test.com',
        password: '123456',
      },
      status: given.status,
    }));
  });

  function renderLoginContainer() {
    return render((
      <LoginContainer onSubmit={handleLoginSubmit} />
    ));
  }

  context('when login request has succeed', () => {
    given('status', () => STATUS_NONE);

    it('renders input controls', () => {
      const { getByLabelText } = renderLoginContainer();

      expect(getByLabelText('이메일').value).toBe('test@test.com');
      expect(getByLabelText('비밀번호').value).toBe('123456');
    });

    it('listens change events', () => {
      const { getByLabelText } = renderLoginContainer();

      fireEvent.change(getByLabelText('이메일'), {
        target: { value: 'test2@test.com' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'application/changeLoginField',
        payload: { name: 'email', value: 'test2@test.com' },
      });
    });
  });

  context('when login request has failed', () => {
    given('status', () => STATUS_ERROR);

    it('renders error message', () => {
      const { container } = renderLoginContainer();

      expect(container).toHaveTextContent('죄송합니다');
    });
  });
});
