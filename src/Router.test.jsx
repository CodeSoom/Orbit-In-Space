import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import Router from './Router';

jest.mock('react-redux');
jest.mock('./assets');

describe('Router', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      planets: [
        { id: 1, mood: '행복' },
      ],
      selectedPlanet: { id: 1, mood: '행복' },
      loginFields: {
        email: 'test@test',
        password: '1234',
      },
    }));
  });

  function renderRouter({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <Router />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = renderRouter({ path: '/' });

      expect(container).toHaveTextContent('오늘은 어떤 하루였나요?');
    });
  });

  context('with path /login', () => {
    it('renders the login Page', () => {
      const { container } = renderRouter({ path: '/login' });

      expect(container).toHaveTextContent('로그인해주세요');
    });
  });

  context('with path /planets', () => {
    it('renders the planets Page', () => {
      const { container } = renderRouter({ path: '/planets' });

      expect(container).toHaveTextContent('행성을 클릭해주세요');
    });
  });

  context('with path /planet', () => {
    it('renders the planet Page', () => {
      const selectedPlanet = { id: 1, mood: '행복' };

      const { container } = renderRouter({ path: '/planets/1' });

      expect(container).toHaveTextContent(`오늘은 ${selectedPlanet.mood} 행성이네요`);
    });
  });
});
