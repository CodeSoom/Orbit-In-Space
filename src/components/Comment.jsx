import styled from '@emotion/styled';

import { mq, colors } from '../designSystem';

const Conatianer = styled.div({
  margin: '1.5em 0',
  [mq.desktop]: {
    margin: '3.5em 0',
  },
});

const Title = styled.h1({
  fontSize: '1.2em',
  fontWeight: 400,
  textAlign: 'left',
  padding: '0 .5em',
});

const Wrapper = styled.div({
  margin: '.8em 0',
  padding: '.8em',
  border: `1px solid ${colors.highlight}`,
  color: colors.wihte,
  borderRadius: '5px',
  [mq.desktop]: {
    marginTop: '1em',
  },
});

const Text = styled.div({
  textAlign: 'left',
  fontWeight: 300,
});

export default function Comment({ comment }) {
  return (
    <Conatianer>
      <Title>
        오늘의 코멘트
      </Title>
      <Wrapper>
        <Text>
          {comment}
        </Text>
      </Wrapper>
    </Conatianer>
  );
}
