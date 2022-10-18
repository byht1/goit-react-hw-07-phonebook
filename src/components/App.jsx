import { ToastContainer } from 'react-toastify';
import { ContactForm } from 'components/PhoneBook/ContactForm/ContactForm';
import { ContactList } from 'components/PhoneBook/ContactList/ContactList';
import { Topics } from 'components/PhoneBook/Topics/Topics';
import { Filter } from 'components/PhoneBook/Filter/Filter';
import { Section, Container, H1, DivList } from './App.styled';

import 'react-toastify/dist/ReactToastify.css';

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
