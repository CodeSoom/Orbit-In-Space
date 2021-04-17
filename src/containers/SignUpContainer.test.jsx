import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import SignUpContainer from './SignUpContainer';

import {
  STATUS_NONE,
  STATUS_ERROR,
} from '../types/status';

jest.mock('../services/api');

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
      status: given.status,
    }));
  });

  function renderSignUpContainer() {
    return render((
      <SignUpContainer onSubmit={handleSignUpSubmit} />
    ));
  }

  context('when sign up request has succeed', () => {
    given('status', () => STATUS_NONE);

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

  context('when sign up request has failed', () => {
    given('status', () => STATUS_ERROR);

    it('renders error message', () => {
      const { container } = renderSignUpContainer();

      expect(container).toHaveTextContent('죄송합니다');
    });
  });
});
