import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import Comment from '../components/Comment';
import MoodInputForm from '../components/MoodInputForm';

import {
  addCommentsData,
  changeField,
  setCreatedDate,
} from '../redux/slice';

import { get } from '../utils';

import { images } from '../assets';

import { mq, colors } from '../designSystem';

const Container = styled.div({
  margin: '3em 0',
  textAlign: 'center',
});

const Title = styled.h1({
  fontSize: '1.5em',
  fontWeight: 400,
  '& strong': {
    fontWeight: 700,
    color: colors.highlight,
  },
});

const Date = styled.h1({
  fontSize: '1.3em',
  fontWeight: 400,
  marginTop: '1em',
});

const Content = styled.div({
  display: 'block',
  margin: '0 auto',
});

const Image = styled.img({
  margin: '3em 0',
  width: '200px',
  height: '200px',
  [mq.desktop]: {
    width: '250px',
    height: '250px',
  },
});

const Description = styled.div({
  fontSize: '1.2em',
  fontWeight: 300,
  marginBottom: '2em',
});

const Buttons = styled.div({
  paddingTop: '1em',
  paddingBottom: '1em',
  bottom: 0,
  left: 0,
  width: '100%',
  '& button': {
    margin: '1em 0',
  },
});

const SecondaryButton = styled.button({
  fontSize: '1.4em',
  fontWeight: 600,
  display: 'block',
  padding: '.7em 1em',
  width: '100%',
  borderRadius: '4px',
  border: `2px solid ${colors.highlight}`,
  backgroundColor: 'transparent',
  color: colors.highlight,
});

const PrimaryButton = styled.button({
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

export default function PlanetContainer() {
  const history = useHistory();

  const dispatch = useDispatch();

  const [isOpen, setOpen] = useState(false);

  const selectedPlanet = useSelector(get('selectedPlanet'));
  const comment = useSelector(get('comment'));
  const createdDate = useSelector(get('createdDate'));

  // TODO: delete this! (테스트 용으로만)
  // const selectedPlanet = {
  //   id: 1,
  //   mood: '행복',
  //   description: '내일도 행복하길 바랄게요!💘',
  // };
  // const comment = '오늘은 점심이 맛있어서 좋았다.';

  useEffect(() => {
    dispatch(setCreatedDate());
  }, []);

  const handleChnageField = ({ name, value }) => {
    dispatch(changeField({ name, value }));
  };

  const handleClickModal = () => {
    setOpen(!isOpen);
  };

  const handleClickMood = () => {
    dispatch(addCommentsData());

    setOpen(!isOpen);
  };

  const handleClickRecord = () => {
    history.push('/record');
  };

  return (
    <Container>
      <Title>
        오늘은
        {' '}
        <strong>
          {selectedPlanet.mood}
        </strong>
        {' '}
        행성이네요
      </Title>
      <Date>{createdDate}</Date>
      <Content>
        <Image
          src={images.planets[selectedPlanet.id]}
          alt=""
        />
        <Description>{selectedPlanet.description}</Description>
        {!isOpen && comment ? (
          <Comment comment={comment} />
        ) : null}
        <Buttons>
          <SecondaryButton
            type="button"
            onClick={handleClickModal}
          >
            오늘의 한줄 작성하기
          </SecondaryButton>
          <PrimaryButton
            type="button"
            onClick={handleClickRecord}
          >
            기록보기
          </PrimaryButton>
          <MoodInputForm
            open={isOpen}
            name="comment"
            onChangeComment={handleChnageField}
            onClick={handleClickMood}
          />
        </Buttons>
      </Content>
    </Container>
  );
}
