import styled from '@emotion/styled';

import { mq, colors } from '../designSystem';

const Conatianer = styled.div({
  margin: '1.5em 0',
  paddingBottom: '3em',
  [mq.desktop]: {
    margin: '3.5em 0',
  },
});

const Title = styled.h1({
  fontSize: '1.2em',
  fontWeight: 400,
  padding: '0 .5em',
  textAlign: 'left',
});

const Text = styled.div({
  margin: '.8em .3em',
  padding: '.8em',
  textAlign: 'left',
  fontWeight: 300,
  border: `1px solid ${colors.highlight}`,
  color: colors.black,
  backgroundColor: colors.white,
  borderRadius: '5px',
  [mq.desktop]: {
    marginTop: '1em',
  },
});

export default function Comment({ comment }) {
  return (
    <Conatianer>
      <Title>
        오늘의 코멘트
      </Title>
      <Text>
        {comment}
      </Text>
    </Conatianer>
  );
}
