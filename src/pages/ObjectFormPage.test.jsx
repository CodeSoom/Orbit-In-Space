import { render } from '@testing-library/react';

import ObjectFormPage from './ObjectFormPage';

describe('ObjectFormPage', () => {
  it('renders title', () => {
    const { container} = render(<ObjectFormPage />);

    expect(container).toHaveTextContent(/목표를 설정해볼까요?/);
  });
});
