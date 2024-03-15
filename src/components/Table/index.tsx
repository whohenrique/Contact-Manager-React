import { useState, useEffect } from 'react';
import Contact from "../../components/Contact";
import { getAllContacts } from '../../services/api';
import { Contacts } from '../../types/contact';

import { 
    Container,
} from './styles'

function TableContacts() {
    const [contacts, setContacts] = useState<Contacts[]>([]);
    
    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
        const contactsData = await getAllContacts();
        setContacts(contactsData);
        } catch (error) {
        console.error('Error fetching contacts:', error);
        }
    };
  return (
    <Container>
    <table className='table'>
      <thead className='table-head'>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className='table-row'>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </tbody>
    </table>
  </Container>
  )
}
export default TableContacts