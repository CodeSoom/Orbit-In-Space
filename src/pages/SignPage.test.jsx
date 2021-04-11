import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import SignPage from './SignPage';

jest.mock('../services/api');

describe('SignPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test',
        password: '1234',
      },
    }));
  });

  it('renders title', () => {
    const { container } = render(<SignPage />);

    expect(container).toHaveTextContent('회원가입해주세요');
  });

  it('renders input control', () => {
    const { getByLabelText } = render(<SignPage />);

    expect(getByLabelText('이메일')).not.toBeNull();
  });
});
