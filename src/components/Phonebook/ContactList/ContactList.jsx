import React from 'react';
import PropTypes from 'prop-types';
import { List, PreLoader } from './ContactList.styled';
import { Contact } from './Contact';
import { useContacts } from './../../../hook/useContacts';

const ContactList = () => {
  const { filteredContacts, isLoading, error } = useContacts();

  const isError = error ? (
    error.data
  ) : (
    <List>
      {filteredContacts.map(x => (
        <Contact data={x} key={`${x.id}${x.phone}`} />
      ))}
    </List>
  );

  return <>{isLoading ? <PreLoader /> : isError}</>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
