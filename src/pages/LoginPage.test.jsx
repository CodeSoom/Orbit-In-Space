import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

import {
  STATUS_NONE,
} from '../types/status';

jest.mock('../services/api');

describe('LoginPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test.com',
        password: '123456',
      },
      status: given.status,
    }));
  });

  context('when sign up request has succeed', () => {
    given('status', () => STATUS_NONE);

    it('renders title', () => {
      const { container } = render(<LoginPage />);

      expect(container).toHaveTextContent('로그인 해주세요');
    });
  });

  it('renders input control', () => {
    const { getByLabelText } = render(<LoginPage />);

    expect(getByLabelText('이메일')).not.toBeNull();
  });
});
