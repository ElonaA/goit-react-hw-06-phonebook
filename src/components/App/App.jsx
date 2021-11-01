import { Section } from 'components/Section/Section';
import { ContactList } from 'components/ContactList/ContactList';
import  ContactForm  from 'components/ContactForm/ContactForm';

import { Inner} from './App.styled';

import { Toaster } from 'react-hot-toast';



export function App() {

  
  return (
    <Inner>
      <Section title="Phonebook">
        <ContactForm  />
      </Section>
      <ContactList />
      <Toaster />
    </Inner>
  );
}
