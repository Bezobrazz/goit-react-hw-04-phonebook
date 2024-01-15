import React, { Component } from 'react';

import { StyledForm, StyledLabel, StyledLabelWrapper } from './styled';
import { Button, TextField } from '@mui/material';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onFormSubmit({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <StyledForm onSubmit={this.onFormSubmit}>
          <StyledLabelWrapper>
            <StyledLabel>
              <TextField
                type="text"
                placeholder="Enter the name"
                name="name"
                required
                value={this.state.name}
                onChange={this.onInputChange}
              />
            </StyledLabel>
            <StyledLabel>
              <TextField
                type="tel"
                placeholder="Enter the phone"
                name="number"
                required
                value={this.state.number}
                onChange={this.onInputChange}
              />
            </StyledLabel>
          </StyledLabelWrapper>
          <Button type="submit" variant="contained" color="primary">
            Add contact
          </Button>
        </StyledForm>
      </div>
    );
  }
}
