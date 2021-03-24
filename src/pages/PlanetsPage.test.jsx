import { render } from '@testing-library/react';

import PlanetsPage from './PlanetsPage';

describe('PlanetsPage', () => {
  it('renders title', () => {
    const { container} = render(<PlanetsPage />);

    expect(container).toHaveTextContent(/행성을 클릭해주세요/);
  });
});
