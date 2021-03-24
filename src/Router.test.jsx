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

      expect(container).toHaveTextContent('오늘은 어떤 하루였나요?');
    });
  });

  context('with path /planets', () => {
    it('renders the planets Page', () => {
      const { container } = renderRouter({ path: '/planets' });

      expect(container).toHaveTextContent('행성을 클릭해주세요');
    });
  });
});
