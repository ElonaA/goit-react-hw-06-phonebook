import Filter from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { Inner, Title, Wrapper, Button, PersonBadge, TelephonePlus,  XCircle } from './ContactList.styled';

export const ContactList = () => {
  
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteButton = id => dispatch(actions.DELETE(id));

  return (
    <>
      {filteredContacts.length > 0 &&
        <Section title="Contacts">
          {filteredContacts.length > 1 &&
            <Filter />
          }
          <Inner>
            <ul>

              {filteredContacts.map(({ id, name, number }) => (
                <li key={id}>
                  <Wrapper>
                    <PersonBadge /> <Title>{name} </Title>  <TelephonePlus /> <Title>{number}</Title>
                    <Button type="button" onClick={() => onDeleteButton(id)}>
                      < XCircle />
                    </Button>
                  </Wrapper>
                </li>
              ))}
            </ul>
          </Inner>
        </Section>
      }
    </>
  );
}

