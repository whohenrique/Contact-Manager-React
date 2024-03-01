// import { useState, useEffect } from 'react';
// import axios from 'axios';
import { Title, Wrapper } from "../../styles/theme";

export default function Home() {
//   const [contacts, setContacts] = useState<ContactProps[]>([]);
// 
//   useEffect(() => {
//     axios.get('http://localhost:8000/api/v1/contacts/')
//       .then(response => {
//         setContacts(response.data as ContactProps[]);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

  return (
    <Wrapper>
      <Title>Hello World!</Title>
      {/* <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            Nome: {contact.name}, Email: {contact.email}, Telefone: {contact.phone}
          </li>
        ))}
      </ul> */}
    </Wrapper>
  );
}
