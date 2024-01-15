import React from 'react';
import { StyledList, StyledListItem, BoldText } from './styled';
import { Button } from '@mui/material';

const ContactList = ({ contacts, onDeleteContact }) => (
  <StyledList>
    {contacts.map(({ id, name, number }) => (
      <StyledListItem key={id}>
        <div>
          <BoldText>{name}:</BoldText> {number}
        </div>
        <Button
          type="text"
          variant="contained"
          color="warning"
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          Delete
        </Button>
      </StyledListItem>
    ))}
  </StyledList>
);

export default ContactList;
