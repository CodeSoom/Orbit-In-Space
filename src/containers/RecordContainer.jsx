import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import { dbService } from '../services/firebase';

import { images } from '../assets';

import { colors, styles } from '../designSystem';

const Container = styled.div({
  margin: '2em 0',
  textAlign: 'center',
});

const UL = styled.ul({
  ...styles.center,
  textAlign: 'left',
});

const Li = styled.li({
  display: 'inline-flex',
  margin: '1em 0',
});

const Content = styled.div({
  display: 'block',
  margin: '1em 1.5em',
});

const Image = styled.img({
  marginRignt: '1em',
  width: '30%',
});

const Description = styled.div({
  fontSize: '1.2em',
  fontWeight: 300,
});

const Mood = styled.div({
  fontSize: '1.2em',
  fontWeight: 300,
});

const ButtonWrapper = styled.div({
  ...styles.center,
  position: 'fixed',
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
    const feelingDatas = await dbService.collection('feelings').get();
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

  if (!feelings) {
    return (
      <p>기록이 없습니다. 먼저 오늘의 기분을 기록해주세요.</p>
    );
  }

  return (
    <Container>
      <UL>
        {feelings.map((feeling) => (
          <Li key={feeling.id}>
            <Image
              src={images.planets[feeling.selectedPlanet.id]}
              alt=""
            />
            <Content>
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
          </Li>
        ))}
      </UL>
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
