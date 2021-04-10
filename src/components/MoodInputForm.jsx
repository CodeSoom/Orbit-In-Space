import styled from '@emotion/styled';

import Modal from './Modal';

import TextInputField from './TextInputField';

import { colors } from '../designSystem';

const Button = styled.button({
  fontSize: '1.4em',
  fontWeight: 600,
  display: 'block',
  marginTop: '1em',
  padding: '.7em 1em',
  width: '100%',
  border: `1px solid ${colors.highlight}`,
  borderRadius: '4px',
  backgroundColor: colors.highlight,
  color: colors.black,
});

export default function MoodInputForm({
  open, comment, onChangeComment, onClick,
}) {
  const handleClickSubmit = () => {
    onClick();
  };

  return (
    <Modal open={open}>
      <TextInputField
        large
        label="오늘의 기분을 남겨보세요 ✍️"
        name="comment"
        value={comment}
        placeholder="언제 그런 감정을 느꼈나요?"
        onChange={onChangeComment}
      />
      <Button
        type="button"
        onClick={handleClickSubmit}
      >
        확인
      </Button>
    </Modal>
  );
}
