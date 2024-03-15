import React, { useState } from 'react';
import { ContactsForm } from '../../types/contact';
import { createContacts } from '../../services/api';

import {
    ModalOverlay,
    ModalContent,
    TitleModal,
    InputField,
    SubmitButton
} from './styles'

interface ContactFormProps {
  onClose: () => void;
}

const CreateContact: React.FC<ContactFormProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newContact: ContactsForm = { name, email, phone };
    try {
        await createContacts(newContact);
        setName('');
        setEmail('');
        setPhone('');
        onClose();
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
};

  return (
    <ModalOverlay>
      <ModalContent>
        <TitleModal>Create new contact</TitleModal>
        <form>
          <InputField
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='Name'
          />
          <InputField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='E-mail'
          />
          <InputField
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder='Phone'
          />
          <SubmitButton onClick={handleSubmit} type="submit">Create</SubmitButton>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CreateContact;
