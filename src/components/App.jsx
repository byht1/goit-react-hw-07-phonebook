import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Section, Container, H1, DivList } from './App.styled';
import { Topics } from './PhoneBook/Topics/Topics';
import { Filter } from './PhoneBook/Filter/Filter';
import { ContactForm } from './PhoneBook/ContactForm/ContactForm';
import { ContactList } from './PhoneBook/ContactList/ContactList';

export default function App() {
  return (
    <>
      <Section>
        <Container>
          <div>
            <H1>PhoneBook</H1>
            <ContactForm />
          </div>

          <DivList>
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </DivList>
        </Container>
      </Section>

      <Topics />

      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        draggable
      />
    </>
  );
}
