import styled from '@emotion/styled';

import { colors } from '../designSystem';

const Container = styled.div({
  display: 'block',
  margin: '1em 0',
});

const Label = styled.label({
  fontSize: '1.2em',
  marginRight: '.3em',
  marginBottom: '.5em',
});

const Input = styled.input({
  fontSize: '1.2em',
  padding: '.7em',
  width: '100%',
  height: '2em',
  border: `1px solid ${colors.border}`,
  borderRadius: '5px',
});

const LargeInput = styled.textarea({
  fontSize: '1em',
  marginTop: '2em',
  padding: '.7em',
  width: '90%',
  border: `1px solid ${colors.border}`,
  borderRadius: '5px',
});

const Note = styled.div({
  fontSize: '1em',
  padding: '.5em .3em',
  color: colors.highlight,
});

export default function TextInputField({
  label, note, large, type = 'text', placeholder, name, value, maxLength, onChange,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target } = event;
    onChange({
      name,
      value: maxLength ? target.value : target.value.slice(0, maxLength),
    });
  }

  return (
    <Container>
      <Label htmlFor={id}>
        {label}
      </Label>
      {large ? (
        <LargeInput
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      ) : (
        <Input
          type={type}
          id={id}
          name={name}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
      {note ? (
        <Note>
          {note}
        </Note>
      ) : null}
    </Container>
  );
}
