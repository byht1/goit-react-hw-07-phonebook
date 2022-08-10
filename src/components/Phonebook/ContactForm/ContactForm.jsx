import React, { useState } from 'react';
import { useAddContactsMutation } from 'redux/itemsContact';
import { Span, Input, Button, Form } from './ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [post] = useAddContactsMutation();
  const onSubmit = async e => {
    e.preventDefault();
    await post({ name, phone });
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="name">
        <Span>Name</Span>
        <Input
          onChange={e => setName(e.target.value)}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Rosie Simpson"
        />
      </label>

      <label htmlFor="number">
        <Span>Number</Span>
        <Input
          onChange={e => setPhone(e.target.value)}
          value={phone}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="645-17-79"
        />
      </label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}
