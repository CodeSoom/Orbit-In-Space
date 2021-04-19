import { render, fireEvent } from '@testing-library/react';

import SignUp from './SignUp';

describe('SignUp', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderSignUp({ email, password } = {}) {
    return render((
      <SignUp
        fields={{ email, password }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('renders input controls', () => {
    const email = 'test@test.com';
    const password = '123456';

    const { getByLabelText } = renderSignUp({ email, password });

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
    const { getByLabelText } = renderSignUp();

    const controls = [
      { label: '이메일', name: 'email', value: 'tester@example.com' },
      { label: '비밀번호', name: 'password', value: '1234' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);
      fireEvent.change(input, { target: { value } });
      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders “가입하기” button', () => {
    const email = 'test@test.com';
    const password = '123456';

    const { getByText } = renderSignUp({ email, password });

    fireEvent.click(getByText('가입하기'));

    expect(handleSubmit).toBeCalled();
  });
});
