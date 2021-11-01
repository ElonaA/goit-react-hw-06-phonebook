import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import { Button, Inner, Form, Input, Label,  } from './ContactForm.styled';

import toast from 'react-hot-toast';
import { getContacts } from '../../redux/contacts/contacts-selectors';


export default function ContactForm() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  
  //При отправке формы передает контакт через пропсы в Арр и проверяет на дубли и пустое поле
  const onSubmitContactForm = e => {
    e.preventDefault();

    const checkUniqName = onCheckUniq(name);
    if (!checkUniqName) return;

    onAddContact(name, number);
    reset();
  };

  //Следит за инпутом и обновляет состояние переменной имя  
  const onChangeName = e => {
    setName(e.target.value);
  };

  //Проверяет имя на дубль
  const onCheckUniq = (name) => {
    const uniqName = !!contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (uniqName) {
      toast.error(`${name} is already in contacts`);
      reset();
      return false;
    }
    if (!(name && number)) {
      toast.error('Empty field');
      return false;
    }

    return dispatch(actions.UNIQNAME(name));
  }
  const onAddContact = (name, number) => dispatch(actions.ADD(name, number));
  
  //Следит за инпутом и обновляет переменную состояния имя 
   const onChangeNumber = e => {
    setNumber(e.target.value);
  };

    //Чистим форму (сбрасываем поля после отправки)
  const reset = () => {
    setName('');
    setNumber('');
  };

    return (
      <Inner>
        <Form onSubmit={onSubmitContactForm}>
          <Label >
            Name
          <Input
              name="name"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={onChangeName}
            />
          </Label>
          <Label>
            Phone
          <Input
              name="number"
              type="text"
              placeholder="Enter Phone Number"
              value={number}
              onChange={onChangeNumber}
            />
          </Label>
          <Button type="submit">Add contacts</Button>
        </Form>
      </Inner>
    );
};

