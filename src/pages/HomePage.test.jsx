import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders title', () => {
    const { container} = render(<HomePage />);

    expect(container).toHaveTextContent(/환영합니다/);
  });
});
