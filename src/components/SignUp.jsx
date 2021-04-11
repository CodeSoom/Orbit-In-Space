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
});

export default function SignUp({ fields, onChange, onSubmit }) {
  const { email, password } = fields;

  const isValid = email && password;

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
        note="비밀번호는 식별용으로만 사용됩니다."
        value={password}
        maxLength={6}
        placeholder="숫자 6자리를 입력해주세요"
        onChange={onChange}
      />
      {isValid ? (
        <ButtonWrapper>
          <Button
            type="button"
            onClick={onSubmit}
          >
            가입하기
          </Button>
        </ButtonWrapper>
      ) : null}
    </>
  );
}
