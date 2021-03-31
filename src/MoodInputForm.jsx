import styled from '@emotion/styled';

import Modal from './Modal';

import { colors } from './designSystem';

const Label = styled.label({
  fontSize: '1.2em',
});

const Input = styled.textarea({
  fontSize: '1em',
  marginTop: '2em',
  padding: '.7em',
  width: '90%',
  border: `1px solid ${colors.border}`,
  borderRadius: '5px',
});

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

export default function PlanetContainer({
  open, name, value, onChange, onClick,
}) {
  const handleChange = (event) => {
    const { target } = event;
    onChange({ name, value: target.value });
  };

  const handleClickSubmit = () => {
    onClick();
  };

  return (
    <Modal open={open}>
      <Label htmlFor="input-mood">
        오늘의 기분을 남겨보세요 ✍️
      </Label>
      <Input
        id="input-mood"
        type="text"
        name="mood"
        value={value}
        placeholder="오늘의 기분을 마음껏 작성해보세요!"
        onChange={handleChange}
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
