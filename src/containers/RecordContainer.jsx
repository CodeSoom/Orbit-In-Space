import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import { dbService, authService } from '../services/firebase';

import Record from '../components/Record';

import { colors } from '../designSystem';

const Container = styled.div({
  margin: '2em 0',
  textAlign: 'center',
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
    const feelingDatas = await dbService.collection(user).orderBy('createdAt', 'desc').get();
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
      <Record feelings={feelings} />
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
