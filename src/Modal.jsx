import styled from '@emotion/styled';

import { mq, colors } from './designSystem';

const Overlay = styled.div(({ visible }) => ({
  zIndex: 100,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, .7)',
  opacity: visible ? 1 : 0,
  visibility: visible ? 'visible' : 'hidden',
  transition: '.3s',
  overflowY: 'auto',
}));

const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  maxWidth: '600px',
  minHeight: '100%',
});

const TopBlank = styled.div({
  flex: 1,
});

const BottomBlank = styled.div({
  display: 'none',
  [mq.desktop]: {
    flex: 1,
    display: 'block',
  },
});

const Dialog = styled.div(({ visible }) => ({
  marginBottom: visible ? 0 : '-4%',
  padding: '1em',
  paddingTop: '5em',
  border: `1px solid ${colors.border}`,
  borderRadius: '50% 50% 0 0',
  background: colors.background,
  transition: '.3s',
  [mq.desktop]: {
    marginTop: visible ? 0 : '-4%',
    marginBottom: 0,
    paddingTop: '2em',
    paddingBottom: '2em',
    border: `1px solid ${colors.gray}`,
    borderRadius: '15px',
  },
}));

export default function Modal({ children, open, onClickOutside }) {
  const handleClickOutside = () => {
    if (onClickOutside) {
      onClickOutside();
    }
  };

  const handleClickInside = (event) => {
    event.stopPropagation();
  };

  return (
    <Overlay
      role="dialog"
      visible={open}
      onClick={handleClickOutside}
    >
      <Content>
        <TopBlank />
        <Dialog
          visible={open}
          onClick={handleClickInside}
        >
          {children}
        </Dialog>
        <BottomBlank />
      </Content>
    </Overlay>
  );
}
