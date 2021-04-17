import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import SignPage from './SignPage';

import {
  STATUS_NONE,
} from '../types/status';

jest.mock('../services/api');

describe('SignPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test',
        password: '123456',
      },
      status: given.status,
    }));
  });

  context('when sign up request has succeed', () => {
    given('status', () => STATUS_NONE);

    it('renders title', () => {
      const { container } = render(<SignPage />);

      expect(container).toHaveTextContent('회원가입 해주세요');
    });

    it('renders input control', () => {
      const { getByLabelText } = render(<SignPage />);

      expect(getByLabelText('이메일')).not.toBeNull();
    });
  });
});
