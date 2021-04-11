import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-router-dom');
jest.mock('./assets');
jest.mock('./services/firebase');

describe('App', () => {
  it('renders without crash', () => {
    render(<App />);
  });
});
