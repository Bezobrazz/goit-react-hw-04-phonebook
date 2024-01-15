import React, { useState } from 'react';
import { StyledForm, StyledLabel, StyledLabelWrapper } from './styled';
import { Button, TextField } from '@mui/material';

const ContactForm = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onNameChange = e => {
    setName(e.target.value);
  };

  const onNumberChange = e => {
    setNumber(e.target.value);
  };

  const onFormSubmitHandler = e => {
    e.preventDefault();
    onFormSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <StyledForm onSubmit={onFormSubmitHandler}>
        <StyledLabelWrapper>
          <StyledLabel>
            <TextField
              type="text"
              placeholder="Enter the name"
              name="name"
              required
              value={name}
              onChange={onNameChange}
            />
          </StyledLabel>
          <StyledLabel>
            <TextField
              type="tel"
              placeholder="Enter the phone"
              name="number"
              required
              value={number}
              onChange={onNumberChange}
            />
          </StyledLabel>
        </StyledLabelWrapper>
        <Button type="submit" variant="contained" color="primary">
          Add contact
        </Button>
      </StyledForm>
    </div>
  );
};

export default ContactForm;
