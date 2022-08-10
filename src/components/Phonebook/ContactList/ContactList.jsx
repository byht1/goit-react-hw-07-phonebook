import React from 'react';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { Contact } from './Contact';
import { useContacts } from './../../../hook/useContacts';

const ContactList = () => {
  const { filteredContacts, isLoading, error } = useContacts();

  return (
    <List>
      {error
        ? error.data
        : isLoading
        ? 'НАДА НАМАЛЮВАТИ СПІНЕР'
        : filteredContacts.map(x => (
            <Contact data={x} key={`${x.id}${x.phone}`} />
          ))}
    </List>
  );
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
