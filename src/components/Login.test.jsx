import { render, fireEvent } from '@testing-library/react';

import Login from './Login';

describe('Login', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderLogin({ email, password } = {}) {
    return render((
      <Login
        fields={{ email, password }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('renders input controls', () => {
    const email = 'test@test.com';
    const password = '123456';

    const { getByLabelText } = renderLogin({ email, password });

    const controls = [
      { label: '이메일', value: email },
      { label: '비밀번호', value: password },
    ];

    controls.forEach(({ label, value }) => {
      const input = getByLabelText(label);
      expect(input.value).toBe(value);
    });
  });

  it('listens change events', () => {
    const { getByLabelText } = renderLogin();

    const controls = [
      { label: '이메일', name: 'email', value: 'tester@example.com' },
      { label: '비밀번호', name: 'password', value: '000000' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders “로그인” button', () => {
    const email = 'test@test.com';
    const password = '123456';

    const { getByText } = renderLogin({ email, password });

    fireEvent.click(getByText('로그인'));

    expect(handleSubmit).toBeCalled();
  });
});
