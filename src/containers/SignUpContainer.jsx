import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import SignUp from '../components/SignUp';

import { colors } from '../designSystem';

import {
  changeLoginField,
  requestSignUp,
  clearStatus,
} from '../redux/slice';

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
        <strong>πββοΈπββοΈ</strong>
        <span>μ£μ‘ν©λλ€.</span>
        <span>λͺ¨λ°μΌμΌ κ²½μ°,</span>
        <span>λ°μ€ν¬νμΌλ‘ κ°μμ νκ±°λ</span>
        <span>μλ‘μ΄ λΈλΌμ°μ μμ</span>
        <span>λ€λ₯Έ μ΄λ©μΌλ‘ κ°μν΄μ£ΌμΈμ</span>
      </Message>
      <PrimaryButton
        type="button"
        onClick={onClick}
      >
        νμκ°μμΌλ‘ λμκ°κΈ°
      </PrimaryButton>
    </>
  );
}

export default function SignUpContainer() {
  const history = useHistory();

  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));
  const completion = useSelector(get('completion'));
  const status = useSelector(get('status'));

  useEffect(() => {
    if (completion) {
      history.push('/sign-complete');
    }
  }, [completion]);

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  const handleSubmit = () => {
    dispatch(requestSignUp());
  };

  const handleClickSignUp = () => {
    dispatch(clearStatus());
    history.push('/sign');
  };

  if (status === STATUS_ERROR) {
    return (
      <Error onClick={handleClickSignUp} />
    );
  }

  return (
    <>
      <SignUp
        fields={loginFields}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}
