import { render, fireEvent } from '@testing-library/react';

import Modal from './Modal';

describe('Modal', () => {
  const handleClickOutside = jest.fn();

  beforeEach(() => {
    handleClickOutside.mockClear();
  });

  function renderModal() {
    return render((
      <Modal
        open={given.open}
        onClickOutside={handleClickOutside}
      >
        Content
      </Modal>
    ));
  }

  context('when open is true', () => {
    given('open', () => true);

    it('makes content visible', () => {
      const { getByText } = renderModal();

      expect(getByText('Content')).toBeVisible();
    });

    it('listens clicking outside event', () => {
      const { getByRole } = renderModal();

      fireEvent.click(getByRole('dialog'));

      expect(handleClickOutside).toBeCalled();
    });
  });

  context('when open is false', () => {
    given('open', () => false);

    it('makes content hidden', () => {
      const { getByText } = renderModal();

      expect(getByText('Content')).not.toBeVisible();
    });
  });
});
