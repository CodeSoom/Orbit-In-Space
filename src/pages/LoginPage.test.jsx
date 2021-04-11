import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

jest.mock('../services/api');

describe('LoginPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test',
        password: '1234',
      },
    }));
  });

  it('renders title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('로그인해주세요');
  });

  it('renders input control', () => {
    const { getByLabelText } = render(<LoginPage />);

    expect(getByLabelText('이메일')).not.toBeNull();
  });
});
