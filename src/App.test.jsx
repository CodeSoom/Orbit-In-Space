import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-router-dom');

describe('App', () => {
  it('renders without crash', () => {
    render(<App />);
  });
});
