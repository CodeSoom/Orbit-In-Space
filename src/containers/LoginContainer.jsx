import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import Login from '../components/Login';

import {
  changeLoginField,
  requestLogin,
  clearStatus,
} from '../redux/slice';

import { colors } from '../designSystem';

import { get } from '../utils';

import {
  STATUS_ERROR,
} from '../types/status';

const Message = styled.div({
  fontSize: '1.5em',
  padding: '2em 0 5em',
  '& span': {
    display: 'block',
  },
  '& strong': {
    fontSize: '2.5em',
    display: 'block',
    marginBottom: '.5em',
  },
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

function Error({ onClick }) {
  return (
    <>
      <Message>
        <strong>🙇‍♀️🙇‍♂️</strong>
        <span>죄송합니다.</span>
        <span>다시 로그인해주세요.</span>
      </Message>
      <PrimaryButton
        type="button"
        onClick={onClick}
      >
        로그인으로 돌아가기
      </PrimaryButton>
    </>
  );
}

export default function LoginContainer({ onSubmit }) {
  const history = useHistory();

  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));
  const completion = useSelector(get('completion'));
  const status = useSelector(get('status'));

  useEffect(() => {
    if (completion) {
      onSubmit();
    }
  }, [completion]);

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  const handleLoginSubmit = () => {
    dispatch(requestLogin(loginFields));
  };

  const handleClickLogin = () => {
    dispatch(clearStatus());
    history.push('/login');
  };

  if (status === STATUS_ERROR) {
    return (
      <Error onClick={handleClickLogin} />
    );
  }

  return (
    <Login
      fields={loginFields}
      onChange={handleChange}
      onSubmit={handleLoginSubmit}
    />
  );
}
