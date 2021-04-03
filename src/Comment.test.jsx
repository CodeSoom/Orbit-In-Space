import { render } from '@testing-library/react';

import Comment from './Comment';

describe('Comment', () => {
  function renderComment() {
    return render((
      <Comment comment={given.comment} />
    ));
  }

  context('without comment', () => {
    given('comment', () => '');

    it('only renders title', () => {
      const { container } = renderComment();

      expect(container).toHaveTextContent('오늘의 코멘트');
    });
  });

  context('with comment', () => {
    given('comment', () => '내일 친구가 영화보자고 해서 설레!');

    it('renders comment text', () => {
      const { container } = renderComment();

      expect(container).toHaveTextContent('오늘의 코멘트');
      expect(container).toHaveTextContent('내일 친구가 영화보자고 해서 설레!');
    });
  });
});
