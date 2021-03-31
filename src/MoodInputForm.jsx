import styled from '@emotion/styled';

import Modal from './Modal';

import { colors, mq } from './designSystem';

const Title = styled.h1({
  fontSize: '1.3em',
  marginTop: '2em',
  paddingBottom: '1em',
  [mq.desktop]: {
    marginTop: '.5em',
  },
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

export default function PlanetContainer({ open, onClick }) {
  const handleClickSubmit = () => {
    onClick();
  };

  return (
    <Modal open={open}>
      <Title>
        오늘의 기분을 기록해보세요
      </Title>
      <Button
        type="button"
        onClick={handleClickSubmit}
      >
        확인
      </Button>
    </Modal>
  );
}
