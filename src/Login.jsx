import React from 'react';

import styled from '@emotion/styled';

import { colors, styles } from './designSystem';

const Box = styled.div({
  display: 'block',
  margin: '1em 0',
});

const Label = styled.label({
  fontSize: '1.2em',
  fontWeight: 'bold',
});

const Input = styled.input({
  fontSize: '1.2em',
  padding: '.7em',
  width: '100%',
  height: '2em',
  border: `1px solid ${colors.border}`,
  borderRadius: '5px',
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

const Login = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value, maxLength } } = event;
    onChange({
      name,
      value: maxLength < 0 ? value : value.slice(0, maxLength),
    });
  }

  return (
    <>
      <Box>
        <Label htmlFor="login-email">
          E-mail
        </Label>
        <Input
          type="email"
          id="login-email"
          name="email"
          value={email}
          placeholder="이메일을 입력해주세요"
          onChange={handleChange}
        />
      </Box>
      <Box>
        <Label htmlFor="login-password">
          Password
        </Label>
        <Input
          type="password"
          id="login-password"
          name="password"
          value={password}
          placeholder="숫자 4자리를 입력해주세요"
          maxLength={4}
          onChange={handleChange}
        />
      </Box>
      <ButtonWrapper>
        <Button
          type="button"
          onClick={onSubmit}
        >
          로그인
        </Button>
      </ButtonWrapper>
    </>
  );
});

export default Login;
