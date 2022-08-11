import React from 'react';
import { useDeleteContactsMutation } from 'redux/itemsContact';
import { Button, Elements, NameContacts } from './ContactList.styled';
import { MdDelete } from 'react-icons/md';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

// MdDelete;

export const Contact = ({ data: { phone, id, name } }) => {
  const [deleteMaterial, { isLoading, error }] = useDeleteContactsMutation();

  const contactDelete = async id => {
    await deleteMaterial(id);
    if (!isLoading) {
      notify(error);
    }
    return;
  };

  const notifySuccess = () => toast.success(`Hooray! We found images.`);

  const notifyError = () => toast.error('Sorry, there are no');

  function notify(info) {
    if (info) {
      notifyError();
    } else {
      notifySuccess();
    }
  }

  return (
    <Elements>
      <NameContacts>
        {name}: {phone}
      </NameContacts>
      <Button
        type="button"
        onClick={() => contactDelete(11111)}
        disabled={isLoading}
      >
        {isLoading ? (
          <TailSpin height="20" width="20" color="#000000" />
        ) : (
          <MdDelete size={20} />
        )}
      </Button>
    </Elements>
  );
};
