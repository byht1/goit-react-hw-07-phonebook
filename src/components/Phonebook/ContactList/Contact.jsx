import React from 'react';
import { useDeleteContactsMutation } from 'redux/itemsContact';
import { Button, Elements, NameContacts } from './ContactList.styled';

export const Contact = ({ data: { phone, id, name } }) => {
  const [deleteMaterial, { isLoading }] = useDeleteContactsMutation();
  return (
    <Elements>
      <NameContacts>
        {name}: {phone}
      </NameContacts>
      <Button
        type="button"
        onClick={() => deleteMaterial(id)}
        disabled={isLoading}
      >
        Delete
      </Button>
    </Elements>
  );
};
