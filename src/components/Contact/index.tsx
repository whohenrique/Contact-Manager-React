import { useState } from 'react';
import { Contacts } from '../../types/contact';
import { deleteContacts, updateContacts } from '../../services/api';
import { Button } from './styles';

import { 
  ModalOverlay,
  ModalContent,
  InputField,
  TitleModal,
  SubmitButton
} from '../CreateContact/styles';

interface ContactProps {
  contact: Contacts;
}

export default function Contact({ contact }: ContactProps) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const handleDelete = async () => {
    try {
      await deleteContacts(contact.id);
      alert("Contato excluído com sucesso!");
      window.location.reload();
    } catch (error) {
      window.alert('Erro ao excluir contato:');
    }
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleUpdate = async () => {
    try {
      const updatedContact = {
        name: name,
        email: email,
        phone: phone
      };
      await updateContacts(contact.id, updatedContact);
      setShowModal(false);
      window.location.reload();
    } catch (error) {
      console.error('Erro ao atualizar contato:', error);
    }
  };

  return (
    <tr style={{ textAlign: "center" }}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
        <Button>
          <button className='button-update' onClick={handleModalOpen}>
            Update
          </button>
        </Button>
        <Button>
          <button className='button-delete' onClick={handleDelete}>
            Delete
          </button>
        </Button>
      </td>
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <TitleModal>Update contact</TitleModal>
            <InputField type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <InputField type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <SubmitButton onClick={handleUpdate} type='submit'>Update</SubmitButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </tr>
  );
}
