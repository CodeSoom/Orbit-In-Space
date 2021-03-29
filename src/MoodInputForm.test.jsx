import { render, fireEvent } from '@testing-library/react';

import MoodInputForm from './MoodInputForm';

describe('MoodInputForm', () => {
  const handleClickSubmit = jest.fn();

  beforeEach(() => {
    handleClickSubmit.mockClear();
  });

  function renderMoodInputForm() {
    return render((
      <MoodInputForm onClick={handleClickSubmit} />
    ));
  }

  it('renders title', () => {
    const { container } = renderMoodInputForm();

    expect(container).toHaveTextContent('오늘의 기분을 기록해보세요');
  });

  it('listens click event', () => {
    const { getByText } = renderMoodInputForm();

    fireEvent.click(getByText('확인'));

    expect(handleClickSubmit).toBeCalled();
  });
});
