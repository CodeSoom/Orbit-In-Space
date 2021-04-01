import { render, fireEvent } from '@testing-library/react';

import MoodInputForm from './MoodInputForm';

describe('MoodInputForm', () => {
  const handleChange = jest.fn();
  const handleClickSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleClickSubmit.mockClear();
  });

  function renderMoodInputForm() {
    return render((
      <MoodInputForm
        label="오늘의 기분을 남겨보세요"
        name="comment"
        value=""
        onChange={handleChange}
        onClick={handleClickSubmit}
      />
    ));
  }

  it('renders label', () => {
    const { queryByLabelText } = renderMoodInputForm();

    expect(queryByLabelText(/오늘의 기분을 남겨보세요/)).not.toBeNull();
  });

  it('listens change events', () => {
    const { getByTestId } = renderMoodInputForm();

    fireEvent.change(getByTestId('input'), {
      target: { value: '맛있는 점심을 먹어서 행복했다!' },
    });

    expect(handleChange).toBeCalledWith({
      name: 'comment', value: '맛있는 점심을 먹어서 행복했다!',
    });
  });

  it('listens click event', () => {
    const { getByText } = renderMoodInputForm();

    fireEvent.click(getByText('확인'));

    expect(handleClickSubmit).toBeCalled();
  });
});
