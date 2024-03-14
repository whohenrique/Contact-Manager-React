
import { Contacts } from '../../types/contact';
import { deleteContacts } from '../../services/api';
import { Button } from './styles';
interface ContactProps {
  contact: Contacts;
}

export default function Contact({ contact }: ContactProps) {

  const handleDelete = async () => {
    try {
      await deleteContacts(contact.id);
      console.log('Contato excluído com sucesso.');
    } catch (error) {
      window.alert('Erro ao excluir contato:');
    }
  };

  return (
    <tr style={{ textAlign: "center" }}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td  style={{ display: 'flex', justifyContent: 'center', gap: 20,}}>
        <Button>
          <button className='button-update'>
            Update
          </button>
        </Button>
        <Button>
          <button className='button-delete' onClick={handleDelete}>
            Delete
          </button>
        </Button>
      </td>
    </tr>
  );
}
