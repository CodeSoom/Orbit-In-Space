import { render, fireEvent } from '@testing-library/react';

import TextInputField from './TextInputField';

describe('TextInputField', () => {
  context('without type', () => {
    function renderTextInputField() {
      const handleChange = jest.fn();

      return render((
        <TextInputField
          label="오늘의 기분을 남겨보세요"
          name="comment"
          onChange={handleChange}
        />
      ));
    }

    it('renders label and input control', () => {
      const { queryByLabelText } = renderTextInputField();

      expect(queryByLabelText('오늘의 기분을 남겨보세요')).not.toBeNull();
    });

    it('renders “text” input control', () => {
      const { container } = renderTextInputField();

      expect(container).toContainHTML('type="text"');
    });
  });

  context('with type', () => {
    function renderTextInputField() {
      const handleChange = jest.fn();

      return render((
        <TextInputField
          label="비밀번호"
          type="password"
          name="password"
          onChange={handleChange}
        />
      ));
    }

    it('renders label and input control', () => {
      const { queryByLabelText } = renderTextInputField();

      expect(queryByLabelText('비밀번호')).not.toBeNull();
    });

    it('renders “passwordr” input control', () => {
      const { container } = renderTextInputField();

      expect(container).toContainHTML('type="password"');
    });
  });

  context('with note', () => {
    it('renders label and note text', () => {
      const handleChange = jest.fn();

      const { container, queryByText, getByLabelText } = render((
        <TextInputField
          label="비밀번호"
          note="비밀번호는 식별용으로만 사용됩니다."
          name="password"
          value="1234"
          onChange={handleChange}
        />
      ));

      expect(container).toHaveTextContent('비밀번호는 식별용으로만 사용됩니다.');
      expect(queryByText('비밀번호')).not.toBeNull();
      expect(getByLabelText('비밀번호').value).toBe('1234');
    });
  });

  it('renders value', () => {
    const name = 'password';
    const value = '1234';

    const handleChange = jest.fn();

    const { getByLabelText } = render((
      <TextInputField
        label="비밀번호"
        name={name}
        value={value}
        onChange={handleChange}
      />
    ));

    expect(getByLabelText('비밀번호').value).toBe(value);
  });

  it('listens change events', () => {
    const name = 'password';
    const value = '1234';

    const handleChange = jest.fn();

    const { getByLabelText } = render((
      <TextInputField
        label="비밀번호"
        name={name}
        value={value}
        onChange={handleChange}
      />
    ));

    fireEvent.change(getByLabelText('비밀번호'), { target: { value: '0000' } });

    expect(handleChange).toBeCalledWith({ name, value: '0000' });
  });
});
