import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-router-dom');
jest.mock('./assets');
jest.mock('./services/firebase');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      isLoggined: '',
      loginFields: {},
      feelings: [],
    }));
  });

  it('renders without crash', () => {
    render(<App />);
  });
});
