import styled from '@emotion/styled';

import TextInputField from './TextInputField';

import { colors, styles } from '../designSystem';

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
  '&:disabled': {
    borderColor: 'transparent',
    backgroundColor: 'rgba(100, 100, 100, .5)',
    color: 'rgba(100, 100, 100, .8)',
  },
});

export default function SignUp({ fields, onChange, onSubmit }) {
  const { email, password } = fields;

  function validEmail(value) {
    const valid = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    return valid.test(value);
  }

  function validPassword(value) {
    const valid = /^[0-9]{6}$/;

    return valid.test(value);
  }

  const isValid = validEmail(email) && validPassword(password);

  return (
    <>
      <TextInputField
        label="이메일"
        name="email"
        note="@를 포함해서 작성해주세요"
        value={email}
        placeholder="이메일을 입력해주세요"
        onChange={onChange}
      />
      <TextInputField
        label="비밀번호"
        type="password"
        name="password"
        note="비밀번호는 6자리 숫자로 설정해주세요."
        value={password}
        maxLength={6}
        placeholder="숫자 6자리를 입력해주세요."
        onChange={onChange}
      />
      <ButtonWrapper>
        <Button
          type="button"
          onClick={onSubmit}
          disabled={!isValid}
        >
          가입하기
        </Button>
      </ButtonWrapper>
    </>
  );
}
