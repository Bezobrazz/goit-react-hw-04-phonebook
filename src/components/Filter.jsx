import React from 'react';
import { StyledContainer } from './styled';
import { Typography, Input } from '@mui/material';

const Filter = ({ value, onChange }) => (
  <StyledContainer>
    <Typography variant="h3" align="center" fontSize="20px">
      Find contacts by name
    </Typography>
    <Input
      type="text"
      placeholder="Please enter the name of contact"
      name="filter"
      value={value}
      onChange={onChange}
      fullWidth
      style={{ marginTop: '10px' }}
    />
  </StyledContainer>
);

export default Filter;
