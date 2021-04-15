import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import { dbService, authService } from '../services/firebase';

import { images } from '../assets';

import { colors } from '../designSystem';

const Container = styled.div({
  margin: '2em 0',
  textAlign: 'center',
});

const UL = styled.ul({
  margin: '0 auto',
  textAlign: 'left',
  fontSize: '1.2em',
  fontWeight: 300,
});

const LI = styled.li({
  display: 'block',
  margin: '1em 0',
});

const Content = styled.div({
  textAlign: 'center',
  margin: '1em 0 .5em',
  padding: '1em',
  border: `1px solid ${colors.highlight}`,
  borderRadius: '5px',
});

const Image = styled.img({
  margin: '0 auto',
  width: '30%',
});

const Mood = styled.div({
  textAlign: 'left',
});

const Description = styled.div({
  textAlign: 'left',
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

const ButtonWrapper = styled.div({
  paddingTop: '1em',
  paddingBottom: '1em',
  bottom: 0,
  left: 0,
  width: '100%',
});

const Button = styled.button({
  fontSize: '1.4em',
  fontWeight: 600,
  display: 'block',
  padding: '.7em 1em',
  width: '100%',
  borderRadius: '4px',
  border: `1px solid ${colors.highlight}`,
  backgroundColor: colors.highlight,
  color: colors.black,
});

export default function RecordContainer({ onClickAdd }) {
  const [feelings, setFeeligns] = useState([]);

  const getFeelings = async () => {
    const user = authService.currentUser.uid;
    const feelingDatas = await dbService.collection(user).orderBy('createdAt').get();
    feelingDatas.forEach((document) => {
      const feelingdata = {
        ...document.data(),
        id: document.id,
      };
      setFeeligns((prev) => [feelingdata, ...prev]);
    });
  };

  useEffect(() => {
    getFeelings();
  }, []);

  return (
    <Container>
      {feelings.length ? (
      // TODO: seperate this componet
        <UL key={feelings.createdName}>
          {feelings.map((feeling) => (
            <LI key={feeling.id}>
              <Content>
                <Image
                  src={images.planets[feeling.selectedPlanet.id]}
                  alt=""
                />
                <Mood>
                  감정:
                  {' '}
                  {feeling.selectedPlanet.mood}
                </Mood>
                <Description>
                  기록:
                  {' '}
                  {feeling.comment}
                </Description>
              </Content>
            </LI>
          ))}
        </UL>
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
      <ButtonWrapper>
        <Button
          type="button"
          onClick={onClickAdd}
        >
          추가하기 ✍️
        </Button>
      </ButtonWrapper>
    </Container>
  );
}
