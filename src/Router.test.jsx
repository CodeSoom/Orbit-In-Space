import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import Router from './Router';

describe('Router', () => {
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

      expect(container).toHaveTextContent('환영합니다');
    });
  });

  context('with path /object', () => {
    it('renders the object page', () => {
      const { container } = renderRouter({ path: '/object' });

      expect(container).toHaveTextContent('목표를 설정해볼까요?');
    });
  });
});
