import styled from '@emotion/styled';

import { images } from '../assets';

import { colors } from '../designSystem';

const List = styled.ul({
  margin: '0 auto',
  textAlign: 'left',
  fontWeight: 300,
});

const Item = styled.li({
  display: 'block',
  marginTop: '1em',
});

const Wrapper = styled.div({
  marginTop: '1em',
  padding: '1em',
  width: '100%',
  overflow: 'hidden',
  border: `1px solid ${colors.highlight}`,
  borderRadius: '5px',
});

const Content = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1.3em',
  padding: '0 1em',
});

const Image = styled.img({
  width: '30%',
});

const Planet = styled.div({
  marginTop: '1em',
  '& span': {
    fontSize: '1.8em',
    fontWeight: 400,
    display: 'block',
    color: colors.highlight,
  },
  '& small': {
    fontSize: '.9em',
    marginBottom: '1em',
    paddingLeft: '.3em',
  },
});

const Comment = styled.div({
  fontSize: '1.1em',
  margin: '0 auto',
  padding: '1.5em 1.2em 0',
  backgroundImage: `linear-gradient(to right, ${colors.highlight} 60%, rgba(255,255,255,0) 0%)`,
  backgroundPosition: 'Top',
  backgroundSize: '18px 1.5px',
  backgroundRepeat: 'repeat-x',
});

const Notice = styled.div({
  fontSize: '1.2em',
  fontWeight: 300,
  textAlign: 'left',
  marginBottom: '1em',
  padding: '1em',
  border: `1px solid ${colors.highlight}`,
  borderRadius: '5px',
  '& span': {
    display: 'block',
  },
  '& strong': {
    color: colors.highlight,
  },
});

export default function Record({ feelings }) {
  return (
    <>
      {feelings.length ? (
        <List>
          {feelings.map((feeling) => (
            <Item key={feeling.id}>
              <Wrapper>
                <Content>
                  <Planet>
                    <small>
                      {feeling.createdDate}
                    </small>
                    <span>
                      {feeling.selectedPlanet.mood}
                      {' '}
                      행성
                    </span>
                  </Planet>
                  <Image
                    src={images.planets[feeling.selectedPlanet.id]}
                    alt=""
                  />
                </Content>
                <Comment>
                  {feeling.comment}
                </Comment>
              </Wrapper>
            </Item>
          ))}
        </List>
      ) : (
        <Notice>
          <span>기록이 없습니다.</span>
          <span>
            <strong>추가하기</strong>
            {' '}
            버튼을 눌러서
          </span>
          <span>오늘의 기분을 기록해주세요.</span>
        </Notice>
      )}
    </>
  );
}
